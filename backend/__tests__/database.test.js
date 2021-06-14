const mongoose = require('mongoose');
const server = require('../server');
const superTest = require('supertest');
const { saveNewUser, getUser } = require('../services/userServices');
const { getOrder, saveNewOrder } = require('../services/orderServices');
const serverRequest = superTest(server);
const m = new mongoose.Mongoose();
const createUser = jest.fn();
describe('POST ', () => {
  beforeEach((done) => {
    m.connect(process.env.MONGODB_URL || 'mongodb://localhost/AspireMock', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

      .then(() => done())
      .catch((err) => done(err));
  });

  afterEach((done) => {
    m.disconnect()
      .then(() => done())
      .catch((err) => done(err));
  });
  it.skip('OK, creating a new user works', async () => {
    const user = {
      name: 'aldfyeweuss',
      email: 'bareef@bk.ru',
      password: '1tertrfeww1',
    };
    await serverRequest.post('/api/users', saveNewUser(user)).send(user);

    let result = await getUser(user.email);
    expect(result.toObject()).toHaveProperty('_id');
    expect(result.toObject()).toHaveProperty('email');
    expect(result.toObject()).toHaveProperty('password');
  });
  it.skip('OK, creating a new Order works', async () => {
    const order = {
      orderItems: {
        name: 'Men Formal Dress 4',
        category: 'Clothes',
        image: '/images/1.jpg',
        price: 250,
        countInStock: 1,
        brand: 'adidas',
        rating: 4,
        numReviews: 20,
        description: 'high quality product',
      },

      shippingAddress: {
        fullName: 'ali banyali',
        address: 'alsareh',
        city: 'irbed',
        postalCode: '0200',
        country: 'Jordan',
      },
      paymentMethod: 'PayPal',
      itemsPrice: '300',
      shippingPrice: '20',
      taxPrice: '10',
      totalPrice: '330',
      user: '60a0f9d25c30bd2d603dc802',
    };
    await serverRequest
      .post('/api/orders', saveNewOrder(order, '60a0f9d25c30bd2d603dc802'))
      .send(order);

    let result = await getOrder(order._id);
    expect(result.toObject()).toHaveProperty('_id');
    expect(result.toObject()).toHaveProperty('orderItems');
    expect(result.toObject()).toHaveProperty('totalPrice');
  });
});
