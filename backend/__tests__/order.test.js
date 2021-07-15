const server = require('../server');
const superTest = require('supertest');
const serverRequest = superTest(server);
const {
  getOrdersController,
  getOrderController,
} = require('../API/orders/orderController');
const order = require('../services/orderServices');
it('test getOrder service', async () => {
  let response = await order.getOrder('608346beaad8ed49b095eb94');
  expect(response.toObject()).toHaveProperty('_id');
  expect(response.toObject()).toHaveProperty('orderItems');
  expect(response.toObject()).toHaveProperty('paymentMethod');
  expect(response.toObject()).toHaveProperty('itemsPrice');
  expect(response.toObject()).toHaveProperty('taxPrice');
  expect(response.toObject()).toHaveProperty('totalPrice');
  expect(response.toObject()).toHaveProperty('totalPrice');
});
it('test get orders service', async () => {
  let orders = await order.getOrders('60a0f9d25c30bd2d603dc802');
  expect(orders.length).toBeGreaterThan(0);
});
it('test orders Controller', async () => {
  let response = await getOrdersController;
  console.log(response.status);
  expect(response.status).not.toEqual(404);
});
// it('all todos for logged in user', async(done) => {
//  response= await request(order.isAuth)
//     .get('/api/orders')
//     .set({ Authorization: `Bearer ${token}` })
//     .end((err, res:esponse) => {
//       res.should.have.status(200);
//       done();
//     });
// });
it('test order Controller', async () => {
  let res = { message: 'Order Not Found' };
  await getOrderController(
    {
      params: {
        _id: '608346beaad8ed49b095eb94',
      },
    },
    res
  );
  expect(res.status).toEqual(410);
});
