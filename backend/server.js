import express from 'express';
import mongoose from 'mongoose';
import productRouter from './products/productRouter.js';
import dotenv from 'dotenv'
import orderRouter from './orders/orderRouter.js';
import userRouter from './users/userRouter.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/aspire', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter)




app.get('/api/config/paypal', (res, req) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sandbox')
})
app.get('/', (req, res) => {
    res.send('server is ready');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);

});

export default app;



//app.get('/api/products/:id', (req, res) => {
//  const product = data.products.find((x) => x._id === req.params.id);

//if (product) {
//  res.send(product);
//} else { res.status(404).send({ message: 'Product Not Found' }) }
//}
//);
//app.get('/api/products', (req, res) => {
//  res.send(data.products)
// });