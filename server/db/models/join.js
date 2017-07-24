const Sequelize = require('sequelize');
const db = require('../db.js');
const savedJobs = require('./savedJobs.js');
const contacts = require('./contacts.js');

const Join = db.define('join', {
  status: Sequelize.STRING,
});

savedJobs.belongsToMany(contacts, { through: Join });
contacts.belongsToMany(savedJobs, { through: Join });

Join.sync();

module.exports = Join;
