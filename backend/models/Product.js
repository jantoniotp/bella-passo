const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Products = sequelize.define("Products", {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.TEXT, allowNull: false },
  color: { type: DataTypes.TEXT, allowNull: false },
  size: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: "products",
});

sequelize.sync(); // Crea la tabla si no existe

module.exports = Products;