const { Sequelize, BOOLEAN } = require('sequelize');
const db = require('../db/database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  is_admin: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = User;