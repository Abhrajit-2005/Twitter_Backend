const { CommentRepository, TweetRepository } = require('../repository/index');
class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {
        console.log(modelId, modelType, userId, content);

        if (modelType === 'Tweet') {
            var commentable = await this.tweetRepository.get(modelId);
        } else if (modelType === 'Comment') {
            var commentable = await this.commentRepository.get(modelId);
        } else {
            throw new Error('Invalid model type');
        }
        const comment = await this.commentRepository.create({
            content: content,
            user: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });
        commentable.comments.push(comment._id);
        await commentable.save();
        return comment;
    }
}
module.exports = CommentService;