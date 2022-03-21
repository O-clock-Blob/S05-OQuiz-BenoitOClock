const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Question extends Model {}

Question.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anecdote: {
      type: DataTypes.STRING
    },
    wiki: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    tableName: "question"
  }
);

module.exports = Question;
