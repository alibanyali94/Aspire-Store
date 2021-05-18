import express from 'express';
import { isAuth } from '../services/orderServices.js';
import { getOrderController, getOrdersController, newOrderController } from './orderController.js';

const orderRouter = express.Router();


//get orders list 
orderRouter.get('/mine', isAuth, getOrdersController);

orderRouter.post('/', isAuth, newOrderController);

// get order details by id 
orderRouter.get('/:id', isAuth, getOrderController)


export default orderRouter;