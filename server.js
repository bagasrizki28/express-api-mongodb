import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes-products/routes.js";

const route = express();

route.use(express.json());

route.use("/products", productRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:bagas123@bmeapi.acyo5fv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error));

route.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
