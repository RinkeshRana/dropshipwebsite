import mongoose from "mongoose";

let Product;

try {
  // Check if the model is already defined
  Product = mongoose.model("Product");
} catch (error) {
  // Define the model if it's not already defined
  const ProductSchema = new mongoose.Schema(
    {
      id: { type: Number, required: false },
      title: { type: String, required: false },
      description: { type: String, required: false },
      price: { type: Number, required: false },
      discountPercentage: { type: Number, required: false },
      rating: { type: Number, required: false },
      stock: { type: Number, required: false },
      brand: { type: String, required: false },
      category: { type: String, required: false },
      thumbnail: { type: String, required: false },
      images: [{ type: String, required: false }],
    },
    { timestamps: true }
  );

  Product = mongoose.model("Product", ProductSchema);
}

export default Product;
