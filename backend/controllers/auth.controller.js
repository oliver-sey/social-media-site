export const signup = async (req, res) => {
	res.json({
		data: "You hit the signup endpoint in auth.controller.js",
	});
}

export const login = async (req, res) => {
	res.json({
		data: "You hit the login endpoint in auth.controller.js",
	});
}

export const logout = async (req, res) => {
	res.json({
		data: "You hit the logout endpoint in auth.controller.js",
	});
}