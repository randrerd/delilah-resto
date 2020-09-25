const { Sequelize } = require('sequelize');
const db = require('../db/database');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Product name cannot be empty, please try again"
      }
    }
  },
  price: {
    type: Sequelize.STRING,
    validate: {
      isDecimal: {
        msg: "Product price must be a number, please try again"
      }
    }
  },
  product_image: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Please add a product image and try again"
      }
    }
  },
});

module.exports = Product;
