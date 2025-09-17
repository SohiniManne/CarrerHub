// backend/config/db.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,     // database name
  process.env.DB_USER,     // mysql username
  process.env.DB_PASSWORD, // mysql password
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
