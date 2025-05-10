const Like = require('../model/like');
const CrudRepository = require('./crud-repo');
class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try {
            return await this.model.findOne(data);
        } catch (error) {
            console.error('Error finding like:', error);
            throw new Error('Error finding like');
        }
    }
    async deleteLike(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (error) {
            console.error('Error deleting like:', error);
            throw new Error('Error deleting like');
        }
    }
}
module.exports = LikeRepository;