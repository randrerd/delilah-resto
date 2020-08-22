const {Sequelize} = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_STRING_URI);
