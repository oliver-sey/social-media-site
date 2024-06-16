import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log("Mongo URI: " + process.env.MONGO_URI);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	console.log(`In server.js, server is running on port ${PORT}...`);
	connectMongoDB();
});
