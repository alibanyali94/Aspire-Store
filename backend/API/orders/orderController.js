const {
  getOrder,
  getOrders,
  saveNewOrder,
} = require('../../services/orderServices.js');

// orders mine list
exports.getOrdersController = async (req, res) => {
  const orders = await getOrders(req.user._id);
  res.send(orders);
};

exports.newOrderController = async (req, res) => {
  if (req.body.length === 0) {
    res.status(400).send({ message: 'Cart is empty' });
  } else {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    } = req.body;
    const oorder = {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    };
    const createdOrder = await saveNewOrder(oorder, req.user._id);
    res.status(201).send({ message: 'New Order Created', order: createdOrder });
  }
};

exports.getOrderController = async (req, res) => {
  const order = await getOrder(req.params.id);
  if (order) {
    res.send(order);
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
};
