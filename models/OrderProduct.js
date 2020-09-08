const { Sequelize } = require('sequelize');
const db = require('../db/database');

const OrderProduct = db.define('orders_product', {
  product_quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = OrderProduct;
