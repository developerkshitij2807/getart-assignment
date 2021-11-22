import express from "express";
import productRouter from "./productRouter.js";
import testRouter from "./testRouter.js";

const mainRouter = express.Router();

mainRouter.use("/test", testRouter);
mainRouter.use("/product", productRouter);

export default mainRouter;
