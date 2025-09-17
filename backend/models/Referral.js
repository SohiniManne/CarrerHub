const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Internship = require('./Internship');

const Referral = sequelize.define('Referral', {
  status: { type: DataTypes.ENUM('pending', 'accepted', 'rejected'), defaultValue: 'pending' },
});

// Associations
User.hasMany(Referral, { foreignKey: 'student_id' });
User.hasMany(Referral, { foreignKey: 'referrer_id' });
Internship.hasMany(Referral, { foreignKey: 'internship_id' });

Referral.belongsTo(User, { as: 'student', foreignKey: 'student_id' });
Referral.belongsTo(User, { as: 'referrer', foreignKey: 'referrer_id' });
Referral.belongsTo(Internship, { foreignKey: 'internship_id' });

module.exports = Referral;
