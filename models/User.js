const sequelize = require('../config/database');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    first_name: DataTypes.STRING(5),
    last_name: DataTypes.STRING(5),
});

module.exports = User;