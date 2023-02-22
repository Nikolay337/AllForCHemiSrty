const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('all_for_chemistry', 'root', 'R00tR00t', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;