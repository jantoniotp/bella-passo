require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  //process.env.DATABASE_URL,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: true,
    /*dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    }*/
  }
);

sequelize
  .authenticate()
  .then(() => console.log("✅ Conexión establecida correctamente"))
  .catch((err) => {
    console.error("❌ Error de conexión:", err.message);
    console.error("Detalles:", err);
  });

module.exports = sequelize;