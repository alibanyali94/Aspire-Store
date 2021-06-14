const server = require('../server');
const superTest = require('supertest');
const serverRequest = superTest(server);

describe('test API requests', () => {
  it('Handel not Found Route', async () => {
    const response = await serverRequest.get('/not-found-route');
    expect(response.status).toEqual(404);
  });
  it('Handels Home Route', async () => {
    let response = await serverRequest.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('server is ready');
  });
  it('Handels Product Route', async () => {
    let response = await serverRequest.get('/api/products');

    expect(response.status).toEqual(200);
  });
  it('Handels Order Route', async () => {
    let response = await serverRequest.get('/api/orders');

    expect(response.status).toEqual(404);
  });
  it('Handels User Route', async () => {
    let response = await serverRequest.get('/api/users');

    expect(response.status).toEqual(404);
  });
});
