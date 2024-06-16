import express from "express";

const router = express.Router();


router.get("/signup", (req, res) => {
	res.json({
		data: "You hit the signup endpoint in auth.routes.js",
	});
});

router.get("/login", (req, res) => {
	res.json({
		data: "You hit the login endpoint in auth.routes.js"
	});
})

router.get("/logout", (req, res) => {
	res.json({
		data: "You hit the logout endpoint in auth.routes.js"
	});
})

export default router;