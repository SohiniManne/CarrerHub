const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Internship = sequelize.define('Internship', {
  title: { type: DataTypes.STRING, allowNull: false },
  company: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING },
  domain: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
});

module.exports = Internship;
