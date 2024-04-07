const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
	title: { type: String, required: [true, "Title is required"], unique: true },
	duration: { type: Number },
	category: String,
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
