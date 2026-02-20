import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  await mongoose.connect(
    "mongodb+srv://AberDBUser:HVGUwtu0OeEVvqA1@cluster0.y56tacg.mongodb.net/?appName=Cluster0/TripGo",
  );
};

export default connectDB;
