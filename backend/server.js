import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// console.log("Mongo URI: " + process.env.MONGO_URI);

// Our middleware, to parse req.body
app.use(express.json());
// to parse form data (URL encoded)
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	console.log(`In server.js, server is running on port ${PORT}...`);
	connectMongoDB();
});
