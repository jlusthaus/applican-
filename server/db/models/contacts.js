const Sequelize = require('sequelize');
const db = require('../db.js');
const SavedJobs = require('./savedJobs.js');

const Contacts = db.define('Contacts', {
  name: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  Email: {
    type: Sequelize.STRING,
  },
  FollowUp: {
    type: Sequelize.DATE,
  },
});

Contacts.belongsTo(SavedJobs, {
  as: 'Contacts',
  foreignKey: 'job_id',
  constraints: false,
});

SavedJobs.hasMany(Contacts, {
  foreignKey: 'job_id',
  constraints: false,
});

Contacts.sync();

module.exports = Contacts;
