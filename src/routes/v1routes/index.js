const express = require('express');
const createTweet = require('../../controller/tweet-controller');
const { signUp, login } = require('../../controller/user-controller');
const { toggleLike } = require('../../controller/like-controller');
const { createComment } = require('../../controller/comment-controller');
const { authenticate } = require('../../middleware/auth');

const router = express.Router();
router.post('/tweets', authenticate, createTweet);
router.post('/signup', signUp);
router.post('/login', login);
router.post('/likes/toggle', authenticate, toggleLike);
router.post('/comments', authenticate, createComment);

module.exports = router;