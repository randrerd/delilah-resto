const { Sequelize } = require('sequelize');
const db = require('../db/database');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  product_image: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;
