import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  await mongoose.connect(
    "(add your mangoDb config here)",
  );
};

export default connectDB;
