const express = require('express');
const router = express.Router();
const Hackathon = require('../models/Hackathon');

// Get all hackathons
router.get('/', async (req, res) => {
  try {
    const hackathons = await Hackathon.find()
      .sort({ date: 1 })
      .limit(10);
    res.status(200).json(hackathons);
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    res.status(500).json({ message: 'Error fetching hackathons' });
  }
});

// Get hackathons by technology
router.get('/by-tech/:technology', async (req, res) => {
  try {
    const hackathons = await Hackathon.find({
      technologies: req.params.technology,
    })
      .sort({ date: 1 })
      .limit(10);
    res.status(200).json(hackathons);
  } catch (error) {
    console.error('Error fetching hackathons by technology:', error);
    res.status(500).json({ message: 'Error fetching hackathons' });
  }
});

// Add a sample hackathon (for testing)
router.post('/sample', async (req, res) => {
  try {
    const sampleHackathon = new Hackathon({
      title: 'Decentrathon 3.0',
      date: new Date('2024-05-23'),
      technologies: ['AI', 'GameDev'],
      prizeFund: 16000000,
      status: 'upcoming',
      participants: 0,
    });
    
    await sampleHackathon.save();
    res.status(201).json(sampleHackathon);
  } catch (error) {
    console.error('Error creating sample hackathon:', error);
    res.status(500).json({ message: 'Error creating sample hackathon' });
  }
});

module.exports = router; 