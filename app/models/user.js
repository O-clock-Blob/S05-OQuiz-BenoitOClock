const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class User extends Model {
  get fullname() {
    return this.firstname + " " + this.lastname;
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);

module.exports = User;
