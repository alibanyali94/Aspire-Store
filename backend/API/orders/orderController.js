import Order from "../../models/orderModel.js";
import { getOrder, getOrders, saveNewOrder } from "../../services/orderServices.js";


// orders mine list
export const getOrdersController = async (req, res) => {
    const orders = await getOrders(req.user._id);
    res.send(orders);
}

export const newOrderController = async (req, res) => {
    if (req.body.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
    } else {
        const createdOrder = await saveNewOrder(
            req.body.orderItems, req.body.shippingAddress,
            req.body.paymentMethod, req.body.itemsPrice,
            req.body.shippingPrice, req.body.taxPrice,
            req.body.totalPrice, req.user._id)
        res.status(201).send({ message: 'New Order Created', order: createdOrder });
    }
}

export const getOrderController = async (req, res) => {
    const order = await getOrder(req.params.id);
    if (order) {
        res.send(order);
    }
    else {
        res.status(404).send({ message: 'Order Not Found' })
    }
}

