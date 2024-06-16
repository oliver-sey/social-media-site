import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("In server.js, server is ready");
});

app.listen(8000, () => {
	console.log("In server.js, server is running...");
});
