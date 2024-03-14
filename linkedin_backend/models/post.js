const mongoose = require('mongoose');

// Define the post schema
const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create a model based on the schema
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
