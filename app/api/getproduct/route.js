// Import mongoose and the product model
import mongoose from "mongoose";
import Products from "../../models/products";

// Import the connectDB function and the NextResponse object
import connectDB from "../../utils/mongodb";
import { NextResponse } from "next/server";

// Define a GET handler function
export const GET = async (request, res) => {
  // Connect to the database using the imported function
  await connectDB();

  // Parse the request query as an object
  const query = request.query;

  // Find the products that match the query using async/await
  try {
    const result = await Products.find(query);
    console.log("Products found successfully:", result);

    // Return a success response with the result data
    return NextResponse.json({ success: "success", data: result });
  } catch (err) {
    console.error(err);

    // Return an error response with the error message
    return NextResponse.error(err.message, 500);
  }
};
