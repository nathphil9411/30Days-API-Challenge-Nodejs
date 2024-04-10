const Todo = require("./../models/todoModel");

const createTodo = async (req, res) => {
	try {
		const todo = await Todo.create(req.body);
		res.status(201).json({
			status: "success",
			data: { todo },
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			error: err.message,
		});
	}
};
const getAllTodos = async (req, res) => {
	try {
		const queryObj = { ...req.query };
		const excludedField = ["page", "sort", "limit", "fields"];
		excludedField.forEach((el) => delete queryObj[el]);
		const query = Todo.find(queryObj);

		const todos = await query;
		res.status(200).json({ status: "success", data: { todos } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			error: err.message,
		});
	}
};
const getTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		res.status(200).json({ status: "success", data: { todo } });
	} catch (err) {
		res.status(400).json({ status: "fail", message: err.message });
	}
};
const updateTodo = async (req, res) => {
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidator: true,
		});
		res.status(200).json({ status: "success", data: { todo } });
	} catch (err) {
		res.status(400).json({ status: "fail", message: err.message });
	}
};
const deleteTodo = async (req, res) => {
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id);
		res.status(204).json({ status: "success", data: null });
	} catch (err) {
		res.status(400).json({ status: "fail", message: err.message });
	}
};

module.exports = { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo };
