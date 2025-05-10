const express = require('express');
const createTweet = require('../../controller/tweet-controller');
const { signUp } = require('../../controller/user-controller');
const { toggleLike } = require('../../controller/like-controller');
const router = express.Router();
router.post('/tweet', createTweet);
router.post('/signup', signUp);
router.post('/likes/toggle', toggleLike);

module.exports = router;