const server = require('../server');
const superTest = require('supertest');
const serverRequest = superTest(server);
const user = require('../services/userServices');

const {
  loginController,
  registerController,
} = require('../API/users/userController');

it('test getUser service', async () => {
  let u = await user.getUser('banyali@bk.ru');
  expect(u.email).toBe('banyali@bk.ru');
});
it('test login Controller', async (req, res) => {
  await loginController(
    {
      body: {
        email: 'banyali@bk.ru',
        password: '12345',
      },
    },
    res
  );
  expect(res.status).toEqual(410);
});
it('test login Controller', async () => {
  let res = await loginController({
    body: {
      email: 'banyali@bk.ru',
      password: '12345',
    },
  });
  expect(res.status).toEqual(410);
});
it('test register Controller', async () => {
  let response = await registerController;
  console.log(response.status);
  expect(response.status).not.toEqual(410);
});

//  describe('test Users services', () => {
//  it('test register service', async () => {
//     let u = await user.saveNewUser(
//       'ali',
//       'afdfcvdfgvdsvdfgfdfl@gmail.com',
//       '123456789'
//     );
//     expect(u.name).toBe('ali');
//      const compareHash = await bcrypt.compare('123456789', u.password);
//      expect(compareHash).toBe(true);
//   });
