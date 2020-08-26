const { Sequelize } = require('sequelize');
const db = require('../db/database');

const OrderDetails = db.define('orderDetails', {
  order: {
    type: Sequelize.INTEGER,
  },
  product_id: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
});

module.exports = OrderDetails;
