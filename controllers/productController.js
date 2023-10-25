import Product from "../models/productModel.js";

//Get All Product
export async function getAllProduct(req, res) {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Get Product By Id
export async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Add Product
export async function addProduct(req, res) {
  try {
    const product = await Product.create(req.body);
    res.send(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(200).json({ message: error.message });
  }
}

//Update Product
export async function updateProduct(req, res) {
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
}
