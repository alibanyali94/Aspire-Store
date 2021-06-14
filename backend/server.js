const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./API/products/index.js');
const dotenv = require('dotenv');
const orderRouter = require('./API/orders/index.js');
const userRouter = require('./API/users/index.js');
const { errors } = require('celebrate');
const BodyParser = require('body-parser');
dotenv.config();
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/aspire', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.use(BodyParser.json());
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (res, req) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sandbox');
});
app.get('/', (req, res) => {
  res.status(200).send('server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) console.error('Unable to connect the server', err);
  console.log(`serve at http://localhost:${port}`);
});
module.exports = app;

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
