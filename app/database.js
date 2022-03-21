const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  define: {
    updatedAt: "updated_at",
    createdAt: "created_at"
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
