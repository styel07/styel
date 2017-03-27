const mongoose = require('mongoose');
const config = require('../config/database');

// Skill Schema
const SkillSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  description: {
    type: String
  },
  duration: {
    type: Number
  }
});

// Mongoose.model takes in the name of the model and the schema
const Skill = module.exports = mongoose.model('Skill', SkillSchema);


module.exports.getSkillById = function(id, callback) {
  Skill.findByUd(id, callback);
};

module.exports.getSkillByName = function(name, callback) {
  const query = {name: name};
  User.findOne(query, callback);
};

module.exports.addSkill = function(newSkill, callback) {
  newSkill.save(callback);
};
