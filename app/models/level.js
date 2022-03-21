const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Level extends Model {}

Level.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "level"
  }
);

module.exports = Level;
