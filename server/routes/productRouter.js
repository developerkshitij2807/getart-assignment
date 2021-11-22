import express from "express";
import { createProduct, getProduct } from "../controller/product.js";

const productRouter = express.Router();

productRouter.get("/", getProduct);
productRouter.post("/", createProduct);

export default productRouter;
