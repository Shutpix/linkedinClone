const mongoose = require('mongoose');

// Define the education schema
const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    startYear: {
        type: Number,
        required: true
    },
    endYear: {
        type: Number
    },
    activitiesAndSocieties: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// Create a model based on the schema
const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
