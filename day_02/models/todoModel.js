const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		required: [true, "Todo requires a title"],
	},
	description: { type: String },
	category: { type: String },
	comment: { type: String, trim: true },
	actions: { type: String, required: [true, "Set of Actions are required"] },
	createdAt: { type: Date, default: Date.now(), select: false },
	priority: {
		type: String,
		default: "low",
		enum: {
			values: ["low", "high"],
			message: "priority is either low or high",
		},
	},
	completed: { type: Boolean, default: false },
	dueDate: { type: Date, required: [true, "Due date is required"] },
	updatedAt: { type: Date, default: Date.now() },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
