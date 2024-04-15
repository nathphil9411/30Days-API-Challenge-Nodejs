const mongoose = require("mongoose");

//name email photo password confirmpassword
const userSchema = new mongoose.Schema({
	name: { type: String, required: [true, "name is needed"] },
	email: {
		type: String,
		required: [true, "email is required"],
		unique: true,
		lowercase: true,
	},
	password: { type: Mixed, required: [true, "password is required"] },
	password: { type: Mixed, required: [true, "Confirm your password "] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
