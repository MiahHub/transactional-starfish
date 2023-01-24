const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class employee extends Model {}

employee.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    role_id:{
      type: DataTypes.STRING
    },
    manager_id: {
      type: DataTypes.INTEGER
    }    
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = employee;