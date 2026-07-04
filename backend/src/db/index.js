import mongoose from "mongoose";

const connectDB = async () => {
  console.log("DB Name:", process.env.DB_NAME);

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );

    console.log("✅ MongoDB Connected Successfully");
    console.log("Host:", connectionInstance.connection.host);
        console.log("Database:", connectionInstance.connection.name);

  } catch (error) {
    console.error("❌ Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;