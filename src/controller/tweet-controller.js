const tweetService = require('../services/tweet-service');
const service = new tweetService();
async function createTweet(req, res) {
    try {
        const tweet = await service.createTweet(req.body);
        res.status(201).json({
            message: 'Tweet created successfully',
            success: true,
            data: tweet,
            error: {}
        });
    } catch (error) {
        res.status(500).json({
            message: 'something went wrong',
            success: false,
            data: {},
            error: error
        });
    }
}

module.exports = createTweet;