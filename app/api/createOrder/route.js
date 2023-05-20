// Import mongoose and the order model
import mongoose from "mongoose";
import Orders from "../../models/orders";

// Import the connectDB function and the NextResponse object
import connectDB from "../../utils/mongodb";
import { NextResponse } from "next/server";

// Define a POST handler function
export const POST = async (request, res) => {
  // Connect to the database using the imported function
  await connectDB();

  // Parse the request body as an object
  const body = await request.json();
  console.log("body", body.order);

  // Create an order from the request body
  const order = new Orders({
    user: body.order.user,
    products: body.order.products,
    total: body.order.total,
    status: body.order.status,
    payment: body.order.payment,
    delivery: body.order.delivery,
  });

  // Save the order to the database using async/await
  try {
    const result = await order.save();
    console.log("Order saved successfully:", result);

    // Return a success response with the result data
    return NextResponse.json({ success: "success", data: result });
  } catch (err) {
    console.error(err);

    // Return an error response with the error message
    return NextResponse.error(err.message, 500);
  }
};
