// Require mongoose module
import mongoose from "mongoose";
// Define a function to connect to the database
async function connectDB() {
  // Use a global variable to store the connection
  let cachedConnection = global.mongoose;

  if (!cachedConnection) {
    // Create a new connection if none exists
    cachedConnection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Store the connection in the global variable
    global.mongoose = cachedConnection;
  }

  // Use the existing connection
  const db = cachedConnection.connection;

  // Return the connection object
  return db;
}

// Attach a listener for the "connected" event only once
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

// Export the function
module.exports = connectDB;
