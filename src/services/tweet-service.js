const TweetRepository = require('../repository/tweet-repo');
const HashtagRepository = require('../repository/hashtag-repo');

class TweetService {
    constructor() {
        this.TweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async createTweet(tweet) {
        const content = tweet.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map(tag => tag.substring(1).toLowerCase());
        console.log(tags);
        const res = await this.TweetRepository.createTweet(tweet);
        const alreadyExists = await this.HashtagRepository.getHashtagByName(tags);
        let titlesofHashtags = alreadyExists.map(hashtag => hashtag.title);
        let newHashtags = tags.filter(tag => !titlesofHashtags.includes(tag));
        newHashtags = newHashtags.map(tag => {
            return {
                title: tag,
                tweets: [res._id],
            };
        });
        await this.HashtagRepository.bulkCreateHashtags(newHashtags);
        alreadyExists.forEach((hashtag) => {
            hashtag.tweets.push(res._id);
            hashtag.save();
        });

        return res;
    }

    getTweets() {
        return this.tweets;
    }

    deleteTweet(tweetId) {
        this.tweets = this.tweets.filter(tweet => tweet.id !== tweetId);
    }
}

module.exports = TweetService;