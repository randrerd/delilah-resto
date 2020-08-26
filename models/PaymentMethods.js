const { Sequelize } = require('sequelize');
const db = require('../db/database');

const PaymentMethod = db.define('paymentMethod', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = PaymentMethod;
