const { Sequelize } = require('sequelize');
const db = require('../db/database');

const Order = db.define('order', {
  status_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  payment_method_id: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Order;
