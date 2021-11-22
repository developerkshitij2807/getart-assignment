import express from "express";

const testRouter = express.Router();

testRouter.get("/", (req, res) => {
  res.send("Hello from Test Router");
});

export default testRouter;
