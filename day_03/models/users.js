const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//name email password
const userSchema = new mongoose.Schema({
	name: { type: String, required: [true, "name is needed"] },
	email: {
		type: String,
		required: [true, "email is required"],
		unique: true,
		lowercase: true,
	},
	password: { type: String, required: [true, "password is required"] },
});
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 12);
	next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
