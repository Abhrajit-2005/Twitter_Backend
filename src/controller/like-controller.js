const LikeService = require('../services/like-service');
const likeService = new LikeService();

async function toggleLike(req, res) {
    try {
        const like = await likeService.toggleLike(req.body.userId, req.query.modelType, req.query.modelID);

        return res.status(200).json({ success: true, like });
    } catch (error) {
        console.error('Error toggling like:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    toggleLike,
};