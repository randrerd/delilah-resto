const { Sequelize } = require('sequelize');
const db = require('../db/database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = User;
