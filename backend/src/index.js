import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

connectDB().then(() => {
  app.listen(process.env.PORT ||3000, () => {
    console.log("Server Started");
  });
});