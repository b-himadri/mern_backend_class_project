import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js"
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter)
