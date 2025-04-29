const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegramId: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  technologies: [{
    type: String,
    enum: ['AI', 'Blockchain', 'Web', 'Mobile', 'GameDev', 'Data Science', 'IoT', 'AR/VR', 'Security', 'Cloud'],
  }],
  role: {
    type: String,
    enum: ['student', 'professional'],
    required: true,
  },
  school: {
    type: String,
    required: function() {
      return this.role === 'student';
    },
  },
  onboardingCompleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema); 