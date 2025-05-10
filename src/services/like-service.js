const { LikeRespository, TweetRepository, CommentRepository } = require('../repository/index');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRespository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository = new CommentRepository();
    }
    async toggleLike(userId, modelType, modelId) {
        if (modelType === 'Tweet') {
            var likable = await this.tweetRepository.get(modelId);
        } else if (modelType === 'Comment') {
            var likable = await this.commentRepository.get(modelId);
        } else {
            throw new Error('Invalid model type');
        }

        const existingLike = await this.likeRepository.findByUserAndLikeable({
            likedBy: userId,
            likable: modelId,
            onModel: modelType,
        });
        if (existingLike) {
            likable.likes.pull(existingLike.id);
            await likable.save();
            await this.likeRepository.deleteLike(existingLike.id);
            var like = false;
        } else {
            const newLike = await this.likeRepository.create({
                likedBy: userId,
                likable: modelId,
                onModel: modelType,
            });
            likable.likes.push(newLike.id);
            await likable.save();
            var like = true;
        }
        return like;

    }
}
module.exports = LikeService;