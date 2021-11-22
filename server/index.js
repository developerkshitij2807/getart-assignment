import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import mainRouter from "./routes/index.js";

const app = express();
dotenv.config();

// To setup bodyParser so we can properly send request from backend
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/", mainRouter);

const PORT = 5000;
const URL =
  "mongodb+srv://kshitij-getart-admin:kshitij-getart@cluster0.rgbsp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
