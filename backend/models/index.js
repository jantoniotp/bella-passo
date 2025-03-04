const sequelize = require("../config/db");
const Product = require("./Product");
const Model = require("./Model");

Model.hasMany(Product, { foreignKey: "model_id", as: "products" });
Product.belongsTo(Model, { foreignKey: "model_id", as: "models" });

module.exports = { sequelize, Product, Model };