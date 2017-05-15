const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Skill = require('../models/skill');

/* GET skills listing. */
router.get('/', (req, res, next) => {
  console.log('entered skills route');
  Skill.getAllSkills((err, data) => {
    console.log('data: ',data);
      res.json({data});
  });
});

router.post('/add', (req, res, next) => {
  let newSkill = new Skill({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    duration: req.body.duration
  });

  Skill.addSkill(newSkill, (err, skill) => {
    if(err) {
      res.json({
        success: false,
        msg: 'Failed to add Skill'
      });
    } else {
      res.json({
        success: true,
        msg: 'Skill Added'
      });
    }
  });
});

router.put('/update/:id', (req, res, next) => {
  if(req.body.params.id) {
    res.send('updated skill');
  } else {
    res.send('unable to update skill');
  }
});

router.put('/delete/:id', (req, res, next) => {
  if(req.body.params.id) {
    res.send('deleted skill');
  } else {
    res.send('unable to delete skill');
  }
});

// Profile
router.get('/protected', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.send('protected skills route');
});

module.exports = router;
