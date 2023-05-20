import mongoose from "mongoose";
import Products from "../../models/products";
import connectDB from "../../utils/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request, res) => {
  // Connect to the database using the imported function
  await connectDB();
  // Parse the request body as an array
  const body = await request.json();
  console.log("body", body.products);
  // Create an array of products from the request body
  const products = body.products.map(
    (item) =>
      new Products({
        title: item.title,
        slug: item.slug,
        desc: item.desc,
        img: item.img,
        category: item.category,
        size: item.size,
        color: item.color,
        price: item.price,
        availableQty: item.availableQty,
      })
  );

  // Save the products to the database using async/await
  try {
    // debugger;
    const result = await Products.insertMany(products);
    console.log("Products saved successfully:", result);
    // Return a success response with the result data
    return NextResponse.json({ success: "success", data: result });
  } catch (err) {
    console.error(err);
    // Return an error response with the error message
    return NextResponse.error(err.message, 500);
  }
};
