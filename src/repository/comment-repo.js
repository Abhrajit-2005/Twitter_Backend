const Comment = require('../model/comment')
const CrudRepository = require('./crud-repo');

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}
module.exports = CommentRepository;