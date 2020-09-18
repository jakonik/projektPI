const Sequelize = require('sequelize');
module.exports = new Sequelize('PI', 'root1', 'Akoron04132!', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
    }
});
