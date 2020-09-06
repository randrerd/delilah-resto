const { Sequelize } = require('sequelize');
const db = require('../db/database');


const OrderProduct = db.define('orders_product', {
  order_id: {
    type: Sequelize.STRING,
  },
  product_id: {
    type: Sequelize.STRING,
  },
  product_quantity: {
    type: Sequelize.INTEGER,
  },

});

module.exports = OrderProduct;
