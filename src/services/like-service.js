const { LikeRespository, TweetRepository } = require('../repository/index');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRespository();
        this.tweetRepository = new TweetRepository();
    }
    async toggleLike(userId, modelType, modelId) {
        if (modelType === 'Tweet') {
            var tweet = await this.tweetRepository.getTweetById(modelId);
        } else if (modelType === 'Comment') {
            // Handle comment logic here
        } else {
            throw new Error('Invalid model type');
        }

        const existingLike = await this.likeRepository.findByUserAndLikeable({
            likedBy: userId,
            likable: modelId,
            onModel: modelType,
        });
        if (existingLike) {
            tweet.likes.pull(existingLike.id);
            await tweet.save();
            await this.likeRepository.deleteLike(existingLike.id);
            var like = false;
        } else {
            const newLike = await this.likeRepository.create({
                likedBy: userId,
                likable: modelId,
                onModel: modelType,
            });
            tweet.likes.push(newLike.id);
            await tweet.save();
            var like = true;
        }
        return like;

    }
}
module.exports = LikeService;