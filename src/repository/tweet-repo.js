const Tweet = require('../model/tweet');
const CrudRepository = require('./crud-repo');
class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
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