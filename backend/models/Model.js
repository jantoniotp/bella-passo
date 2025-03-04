const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Models = sequelize.define("Models", {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.CHAR, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: "models",
    timestamps: false
});

//sequelize.sync(); // Crea la tabla si no existe

module.exports = Models;