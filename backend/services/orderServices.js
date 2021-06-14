const jwt = require('jsonwebtoken');
const Order = require('../models/orderModel.js');

const getOrders = (user) => {
  return Order.find({ user });
};

const saveNewOrder = (createdOrder, userId) => {
  const newOrder = new Order(
    createdOrder.orderItems,
    createdOrder.shippingAddress,
    createdOrder.paymentMethod,
    createdOrder.itemsPrice,
    createdOrder.shippingPrice,
    createdOrder.taxPrice,
    createdOrder.totalPrice,
    { user: userId }
  );
  return newOrder.save();
};

const getOrder = (orderId) => {
  return Order.findById(orderId);
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'somethingsecret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
module.exports = { isAuth, getOrder, saveNewOrder, getOrders };
