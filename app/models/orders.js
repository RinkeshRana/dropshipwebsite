import mongoose, { Schema } from "mongoose";

let Order;
try {
  // Check if the model is already defined
  Order = mongoose.model("Order");
} catch (error) {
  let orderSchema = new mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    payment: {
      method: {
        type: String,
        enum: ["cash", "card", "paypal"],
        required: true,
      },
      status: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid",
      },
    },
    delivery: {
      address: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
    since: {
      type: Date,
      default: Date.now,
    },
  });
  Order = mongoose.model("Order", orderSchema);
}

export default Order;
