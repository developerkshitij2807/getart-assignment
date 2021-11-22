import ProductModel from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new ProductModel(product);
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error });
    console.log(error);
  }
};
