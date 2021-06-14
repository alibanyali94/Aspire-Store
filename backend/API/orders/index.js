const express = require('express');
const { isAuth } = require('../../services/orderServices.js');
const {
  getOrderController,
  getOrdersController,
  newOrderController,
} = require('./orderController.js');

const orderRouter = express.Router();

//get orders list
orderRouter.get('/mine', isAuth, getOrdersController);

orderRouter.post('/', isAuth, newOrderController);

// get order details by id
orderRouter.get('/:id', isAuth, getOrderController);

module.exports = orderRouter;
