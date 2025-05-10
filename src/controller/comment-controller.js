const CommentService = require('../services/comment-service');
const commentService = new CommentService();

async function createComment(req, res) {
    try {
        const comment = await commentService.create(req.query.modelID, req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createComment
};