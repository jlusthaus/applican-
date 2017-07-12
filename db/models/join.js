const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./User.js');
const savedJobs = require('./savedJobs.js');

const Join = db.define('Join', {
  placeholder: Sequelize.STRING,
});

User.belongsTo(Join, {
  as: 'User',
  foreignKey: 'user_id',
  constraints: false,
});

Join.hasMany(User, {
  foreignKey: 'join_id',
  constraints: false,
});

savedJobs.belongsTo(Join, {
  as: 'Job',
  foreignKey: 'savedJobs_id',
  constraints: false,
});

Join.hasMany(savedJobs, {
  foreignKey: 'savedJobs_id',
  constraints: false,
});

module.exports = Join;
