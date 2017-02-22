const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../models/user');

// Register New User
router.post('/register', (req, res, next) => {
  // Define a New User
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({ success: false, msg: 'Failed to Register User'});
    } else {
      res.json({ success: true, msg: 'Registered User'});
    }
  });
});

// Authenticate User
router.post('/authenticate', (req, res, next) => {
  res.send('authenticate');
});

// Get User Profile
router.get('/profile', (req, res, next) => {
  res.send('user profile');
});

module.exports = router;
