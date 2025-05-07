const mongoose = require('mongoose');
const { Schema } = mongoose;
const likeSchema = new Schema({
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet', 'Comment'],
    },
    likable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel',
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, { timestamps: true });

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;