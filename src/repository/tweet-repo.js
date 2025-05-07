const Tweet = require('../model/tweet');
class TweetRepository {
    async createTweet(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getTweetById(tweetId) {
        try {
            const tweet = await Tweet.findById(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);

        }
    }
}
module.exports = TweetRepository;