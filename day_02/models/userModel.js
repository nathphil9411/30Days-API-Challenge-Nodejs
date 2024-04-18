const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: { type: String, required: [true, "name is required"], trim: true },
	email: {
		type: String,
		required: [true, "email is required"],
		unique: true,
		trim: true,
		lowercase: true,
		validate: [validator.isEmail, "Provide a valid Email"],
	},
	password: {
		type: String,
		required: [true, "password is required"],
		minlength: 8,
		select: false,
	},
	confirmPassword: {
		type: String,
		required: [true, "confirm the password"],
		validate: {
			validator: function (el) {
				return this.password === el;
			},
		},
	},
});
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 12);
	this.confirmPassword = undefined;
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
