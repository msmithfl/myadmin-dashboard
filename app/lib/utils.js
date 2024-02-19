import mongoose from "mongoose";

const mongoKey = process.env.MONGO_URI;

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(`${mongoKey}`);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log("Connection Error:", error);
    throw new Error(error);
  }
};
