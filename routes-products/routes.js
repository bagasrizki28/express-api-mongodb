import express from "express";
import {
  addProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productController.js";

const route = express();

route.use(express.json());

//Route

//Get All
route.get("/products", getAllProduct);

//Get By Id
route.get("/products/:id", getProductById);

//Add Data
route.post("/products", addProduct);

//Update Data
route.put("/products/:id", updateProduct);


export default route;