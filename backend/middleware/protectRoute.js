import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res
				.status(401)
				.json({ error: "Unauthorized: No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// if there is a cookie but it is invalid
		// decoded will also be null if the user messed with the token, since we have the JWT secret
		if (!decoded) {
			return res
				.status(401)
				.json({ error: "Unauthorized: Invalid Token" });
		}
		// we have a valid token at this point

		// if we get past the if-statement checks
		// we don't wait to include the password
		const user = await User.findById(decoded.userId).select("-password");

		// will probably never reach this
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;
		// call the next function
		next();
	} catch (error) {
		console.log("Error in protectRoute middleware", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
