import express from 'express';
import { getProductController, getProductsController, saveProductsController } from './productController.js';

const productRouter = express.Router();


productRouter.get('/', getProductsController);
productRouter.get('/seed', saveProductsController);
productRouter.get('/:id', getProductController)
export default productRouter;