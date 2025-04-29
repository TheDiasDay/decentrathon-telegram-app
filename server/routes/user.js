const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Save user onboarding data
router.post('/', async (req, res) => {
  try {
    const { telegramId, city, technologies, role, school } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ telegramId });
    
    if (user) {
      // Update existing user
      user.city = city;
      user.technologies = technologies;
      user.role = role;
      user.school = school;
      user.onboardingCompleted = true;
      await user.save();
    } else {
      // Create new user
      user = new User({
        telegramId,
        city,
        technologies,
        role,
        school,
        onboardingCompleted: true,
      });
      await user.save();
    }
    
    res.status(200).json(user);
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ message: 'Error saving user data' });
  }
});

// Get user data
router.get('/:telegramId', async (req, res) => {
  try {
    const user = await User.findOne({ telegramId: req.params.telegramId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

module.exports = router; 