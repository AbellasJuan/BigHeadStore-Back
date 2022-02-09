import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import { validSignInMiddleware } from '../middlewares/validSignInMiddleware.js';
import { validUserMiddleware } from '../middlewares/validUserMiddleware.js';

const authRouter = Router();

authRouter.post('/auth/sign-in', validSignInMiddleware, signIn);

authRouter.post('/auth/sign-up', validUserMiddleware , signUp);

export default authRouter;