const express = require("express");
const cors = require("cors");
const { Sequelize, Op, INTEGER } = require('sequelize');;
const { Product, Model } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

// Get all products
/*app.get("/api/products", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});*/

// Create product
app.post("/api/products", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

// Get sizes
app.get("/api/products/sizes", async (req, res) => {
  try {
    const sizes = await Product.aggregate('size', 'DISTINCT', { 
      plain: false, 
      where: { deleted_at: null }
    });
    res.json(sizes.map(s => parseFloat(s.DISTINCT)).sort((a, b) => a - b));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to get sizes' });
}
});

// Get prices
app.get("/api/models/prices", async (req, res) => {
  try {
    const prices = await Model.aggregate('price', 'DISTINCT', { 
      plain: false, 
      where: { deleted_at: null }
    });
    res.json(prices.map(s => parseInt(s.DISTINCT)).sort((a, b) => a - b));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to get prices' });
}
});

// Get products
app.get('/api/products/:filter?/:value?', async (req, res) => {
  try {
      const {filter, value} = req.params;

      /*if (filter !== 'size' && filter !== 'price') {
        return res.status(400).json({error: 'Filter Invalid'});
      }*/

      const whereCondition = {
        deleted_at: null
      }

      if (filter === 'size' && value != 0) {
        whereCondition.size = value
      }

      const modelWhereCondition = {};
      if (filter === 'price' && value != '0') {
        modelWhereCondition.price = {
          [Sequelize.Op.eq]: Sequelize.cast(value, 'integer')
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
              attributes: ['name', 'price'],
              where: Object.keys(modelWhereCondition).length > 0 ? modelWhereCondition : undefined
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

// Get all models
app.get("/api/models", async (req, res) => {
  const models = await Model.findAll();
  res.json(models);
});

//const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));
