const mongoose = require('mongoose');

// Define the experience schema
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: true
    },
    // Additional fields as needed
});

// Create a model based on the schema
const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
