import Order from "../models/orderModel.js";

export const getOrdersController = async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
}

export const newOrderController = async (req, res) => {
    if (req.body.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
    } else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });
        const createdOrder = await order.save();
        res
            .status(201)
            .send({ message: 'New Order Created', order: createdOrder });
    }
}

export const getOrderController = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.send(order);
    }
    else {
        res.status(404).send({ message: 'Order Not Found' })
    }
}

