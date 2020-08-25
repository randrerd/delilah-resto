const { Sequelize } = require('sequelize');
const db = require('../db/database');

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
  },
  products: {
    type: Sequelize.STRING,
  },
  payment_method: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  total_amount: {
    type: Sequelize.STRING,
  },
});

module.exports = Order;
