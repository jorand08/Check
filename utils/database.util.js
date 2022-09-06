const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '0411',
  port: 5432,
  database: 'check',
  logging: false,
});

module.exports = { db, DataTypes };
