import { Router } from "express";
import { getProduct } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.post('/products', getProduct);

export default productsRouter;