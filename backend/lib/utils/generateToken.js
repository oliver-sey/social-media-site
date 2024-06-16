import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});

	// send as a cookie
	res.cookie("jwt", token, {
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
		httpOnly: true, // prevents XSS attacks
		sameSite: "strict", // prevents CSRF attacks
		secure: process.env.NODE_ENV !== "development", // make it secure in prod but not development
	});
};
