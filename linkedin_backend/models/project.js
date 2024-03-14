const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'Pending'
    },
    // You can add more fields as needed
});

// Create a model based on the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
