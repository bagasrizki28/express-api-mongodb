import express from "express";
import mongoose from "mongoose";
import Product from "./models/productModel.js";

const route = express();

route.use(express.json());

//Route

//Get All
route.get("/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get By Id
route.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Add Data
route.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.send(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(200).json({ message: error.message });
  }
});

//Update Data
route.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with id ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(200).json({ message: error.message });
  }
});

route.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:bagas123@bmeapi.acyo5fv.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error));
