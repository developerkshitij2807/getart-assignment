import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  productTitle: String,
  productDescription: String,
  SEODescription: String,
  SEOTitle: String,
  photo: String,
});

const ProductModel = mongoose.model("ProductModel", ProductSchema);

export default ProductModel;
