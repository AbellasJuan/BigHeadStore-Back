import { Router } from "express";
import { createPurchase, getUser } from "../controllers/userController.js";
import { validateToken } from "../middlewares/validateToken.js";
import { validatePurchase } from "../middlewares/validatePurchase.js";

const userRouter = Router();

userRouter.post('/users/purchase', validateToken, validatePurchase, createPurchase);
userRouter.get('/users', validateToken, getUser);

export default userRouter;