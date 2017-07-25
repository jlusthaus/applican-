const Sequelize = require('sequelize');
const config = require('./config.js');
const AWSpwd = require('../../private/config.keys.js').AWSpwd;

const options = process.env.databaseOptions || config.databaseOptions;

const db = new Sequelize('postgresHippo', 'henryhan88', AWSpwd, options);

db.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;
