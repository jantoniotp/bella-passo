const express = require("express");
const cors = require("cors");
const { Sequelize, Op } = require('sequelize');;
const { Product, Model } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Obtener todos los usuarios
app.get("/api/products", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

// Agregar un usuario
app.post("/api/products", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Get products
app.get('/api/products/grouped-by-model', async (req, res) => {
  try {
      const {size} = req.query;

      const whereCondition = {
        deleted_at: null
      }

      if (size && size != '0') {
        whereCondition.size = {
          [Sequelize.Op.eq]: Sequelize.cast(size, 'numeric')
        }
      }

      const products = await Product.findAll({
          where: whereCondition,
          attributes: [
              [Sequelize.fn('STRING_AGG', Sequelize.literal('DISTINCT size::text'), ' | '), 'sizes'],
              [Sequelize.fn('STRING_AGG', Sequelize.literal('DISTINCT color'), ', '), 'colors'],
              [Sequelize.fn('STRING_AGG', Sequelize.literal('DISTINCT image'), ', '), 'images']
          ],
          include: [
            {
              model: Model,
              as: 'models',
              attributes: ['name', 'price']
            }
          ],
          group: ['Products.model_id', 'models.id']
      });

      res.json(products);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error to get products' });
  }
});

// Obtener todos los usuarios
app.get("/api/models", async (req, res) => {
  const models = await Model.findAll();
  res.json(models);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));
