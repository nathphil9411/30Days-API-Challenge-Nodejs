const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const signUp = async (req, res, next) => {
	try {
		const newUser = await User.create({
			email: req.body.email,
			password: req.body.password,
			name: req.body.name,
		});

		res.status(201).json({
			status: "success",
			data: { newUser },
		});
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: error.message,
		});
	}
};

const signIn = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) throw new Error("Provide an email or password");
		user = await User.findOne({ email: email });
		if (!user) throw new Error("user not found");
		const match = await bcrypt.compare(password, user.password);
		if (!match) throw new Error("user not found");
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "90d",
		});
		res.status(200).json({ status: "sucess", token: token });
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: error.message,
		});
	}
};

module.exports = { signIn, signUp };
