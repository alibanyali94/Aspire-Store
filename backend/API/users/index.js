const express = require('express');
const {
  loginController,
  registerController,
  saveUsersController,
} = require('./userController.js');
const { celebrate, errors } = require('celebrate');
const {
  createUserSchema,
  loginSchema,
} = require('../../validations/userValidations.js');
const userRouter = express.Router();
userRouter.get('/seed', saveUsersController);
userRouter.post('/signin', celebrate({ body: loginSchema }), loginController);
userRouter.post(
  '/register',
  celebrate({ body: createUserSchema }),
  registerController
);
userRouter.use(errors());
module.exports = userRouter;
