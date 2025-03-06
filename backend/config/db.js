const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    }
  }
);

sequelize
  .authenticate()
  .then(() => console.log("✅ Conexión establecida correctamente"))
  .catch((err) => console.error("❌ Error de conexión:", err));

module.exports = sequelize;