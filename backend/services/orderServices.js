import jwt from 'jsonwebtoken';
import Order from '../models/orderModel.js';
export const getOrders = (user) => {
    return Order.find({ user })
}

export const saveNewOrder = (orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice, userId) => {
    const newOrder = new Order({
        orderItems: orderItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        itemsPrice: itemsPrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
        user: userId,
    })
    return newOrder.save();
}

export const getOrder = (orderId) => {
    return Order.findById(orderId);
}




export const isAuth = (req, res, next) => {
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