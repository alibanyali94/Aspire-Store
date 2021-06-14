const server = require('../server');
const superTest = require('supertest');
const serverRequest = superTest(server);
const product = require('../services/productServices');
const { getProductsController } = require('../API/products/productController');

describe('test products services', () => {
  it('test get products service', async () => {
    let products = await product.getProducts('', 2);
    expect(products.length).toBeGreaterThan(0);
    expect(products.length).toBe(4);
  });
  it('test get product by id service', async () => {
    let prod = await product.getProduct('60ab985f805cec3cd0ccf3c0');
    //   console.log(prod);
    expect(prod.name).toEqual('Men Formal Dress 1');
    expect(prod.price).toEqual(200);
  });
});

it('test product Controller', async () => {
  let response = await getProductsController;
  console.log(response.status);
  expect(response.status).not.toEqual(410);
});
