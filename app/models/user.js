const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: "user"
  }
);

module.exports = User;
