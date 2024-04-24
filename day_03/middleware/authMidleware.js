const { promisify } = require("util");
const Jwt = require("jsonwebtoken");
const User = require("../models/users");

const authMiddleware = async (req, res, next) => {
	try {
		let token;
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith("Bearer")
		) {
			token = req.headers.authorization.split(" ")[1];
		}
		if (!token) throw new Error("not authorized to view this page");
		const decoded = await promisify(Jwt.verify)(token, process.env.JWT_SECRET);
		const freshUser = await User.findById(decoded.id);
		if (!freshUser) throw new Error("user no longer exist");
		req.user = freshUser;
		next();
	} catch (error) {
		res.status(400).json({ status: "error", message: error.message });
	}
};

module.exports = { authMiddleware };
