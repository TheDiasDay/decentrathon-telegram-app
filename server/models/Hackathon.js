const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  technologies: [{
    type: String,
    enum: ['AI', 'Blockchain', 'Web', 'Mobile', 'GameDev', 'Data Science', 'IoT', 'AR/VR', 'Security', 'Cloud'],
  }],
  prizeFund: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming',
  },
  participants: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Hackathon', hackathonSchema); 