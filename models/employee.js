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
      type: DataTypes.VARCHAR(30)
    },
    last_name: {
      type: DataTypes.VARCHAR(30)
    },
    role_id:{
      type: DataTypes.INTEGER
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