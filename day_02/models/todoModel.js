const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	title: { type: String, required: [true, "Todo requires a title"] },
	description: { type: String },
	category: { type: String },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
