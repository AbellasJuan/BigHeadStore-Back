import { Router } from "express";
import { getProduct, getProducts } from "../controllers/productsController.js";
import { validateToken } from "../middlewares/validateToken.js";

const productsRouter = Router();

productsRouter.get('/products/:id', getProduct);
productsRouter.get('/products', getProducts);

export default productsRouter;