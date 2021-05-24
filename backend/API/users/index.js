import express from 'express';
import { loginController, registerController, saveUsersController } from './userController.js';

const userRouter = express.Router()
userRouter.get('/seed', saveUsersController);
userRouter.post('/signin', loginController)
userRouter.post('/register', registerController)



export default userRouter;
