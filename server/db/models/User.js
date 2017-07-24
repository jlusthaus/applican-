const Sequelize = require('sequelize');
const db = require('../db.js');

const User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  googleId: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: Sequelize.STRING,
});


User.sync();


module.exports = User;
