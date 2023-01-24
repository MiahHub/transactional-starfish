const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class role extends Model {}

role.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.varchar(30)
    },
    salary: {
      type: DataTypes.DECIMAL
    },
    department_id: {
      type: DataTypes.INTEGER
    }    
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role'
  }
);

module.exports = role;