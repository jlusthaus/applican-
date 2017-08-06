const Sequelize = require('sequelize');
const config = require('./config.js');

const options = config.databaseOptions;

const db = new Sequelize(config.databaseUrl, options);

db.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;
