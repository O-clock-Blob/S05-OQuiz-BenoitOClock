const sequelize = require("../database");
const { Model, DataTypes } = require("sequelize");

class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tag"
  }
);

module.exports = Tag;
