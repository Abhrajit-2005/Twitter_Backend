const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [280, 'Tweet content exceeds 280 characters'],
    },

}, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;