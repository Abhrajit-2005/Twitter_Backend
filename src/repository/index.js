const TweetRepository = require('./tweet-repo.js')
const HashtagRepository = require('./hashtag-repo.js')
const LikeRespository = require('./like-repo.js')
const UserRepository = require('./user-repo.js')
const CommentRepository = require('./comment-repo.js')

module.exports = {
    TweetRepository: TweetRepository,
    HashtagRepository: HashtagRepository,
    LikeRespository: LikeRespository,
    UserRepository: UserRepository,
    CommentRepository: CommentRepository,
}