const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: { type: String, required: [true, "Todo requires a title"] },
	description: { type: String },
	category: { type: String },
	comment: { type: String, trim: true },
	actions: { type: String, required: [true, "Set of Actions are required"] },
	createdAt: { type: Date, default: Date.now() },
	priority: { type: String, defualt: "meduim" },
	status: {
		type: String,
		default: "upcoming",
		required: [true, "status of this task is required"],
	},
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
