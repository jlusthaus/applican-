const Sequelize = require('sequelize');
const db = require('../db.js');
const User = require('./User.js');

const SavedJobs = db.define('SavedJobs', {
  company: {
    type: Sequelize.STRING,
  },
  contact_name: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.INTEGER,
  },
  position: {
    type: Sequelize.STRING,
  },
  applied_date: {
    type: Sequelize.DATE,
  },
  notes: {
    type: Sequelize.TEXT,
  },
});

SavedJobs.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id',
  constraints: false,
});

User.hasMany(SavedJobs, { foreignKey: 'user_id', constraints: false });

SavedJobs.sync();

module.exports = SavedJobs;
