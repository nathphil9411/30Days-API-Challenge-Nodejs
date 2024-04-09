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
		const todos = await Todo.find();
		console.log(todos);
		res.status(200).json({ status: "success", data: { todos } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			error: err.message,
		});
	}
};
const getTodo = (req, res) => {};
const updateTodo = (req, res) => {};
const deleteTodo = (req, res) => {};

module.exports = { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo };
