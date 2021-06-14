const express = require('express');
const { getProductController, getProductsController, saveProductsController } = require('./productController.js');

const productRouter = express.Router();


productRouter.get('/', getProductsController);
productRouter.get('/seed', saveProductsController);
productRouter.get('/:id', getProductController)

module.exports = productRouter;
