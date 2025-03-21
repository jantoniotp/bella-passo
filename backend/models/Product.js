const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Products = sequelize.define("Products", {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  color: { type: DataTypes.TEXT, allowNull: false },
  size: { type: DataTypes.NUMBER, allowNull: false },
  createdAt: { type: DataTypes.TIME, allowNull: false },
  updatedAt: { type: DataTypes.TIME, allowNull: false },
  deleted_at: { type: DataTypes.TIME, allowNull: false },
  model_id: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.TEXT, allowNull: false },
}, {
  tableName: "products",
});

//sequelize.sync(); // Crea la tabla si no existe

module.exports = Products;