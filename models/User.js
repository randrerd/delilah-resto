const { Sequelize } = require('sequelize');
const db = require('../db/database');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Username cannot be empty, please try again',
      },
    },
  },
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'First name cannot be empty, please try again',
      },
    },
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Last name cannot be empty, please try again',
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Email is not valid, please try again',
      },
    },
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/,
        msg: 'Phone number is not valid, please try again',
      },
    },
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Address cannot be empty, please try again',
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password cannot be empty, please try again',
      },
    },
  },
  is_admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = User;
