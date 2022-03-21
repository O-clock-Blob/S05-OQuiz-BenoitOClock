const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Quiz extends Model {}

Quiz.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: "quiz"
  }
);

module.exports = Quiz;
