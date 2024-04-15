const Todo = require("./../models/todoModel");
const APIFeatures = require("./../utils/apiFeatures");

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
		const features = new APIFeatures(Todo.find(), req.query)
			.filter()
			.sort()
			.limit()
			.paginate();

		const todos = await features.query;
		console.log(todos.length);

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
	const updateTodo = { ...req.body, updatedAt: Date.now() };
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id, updateTodo, {
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

const alaisMostImportantTodos = (req, res, next) => {
	const query = { priority: "high", completed: false };
	req.query = { ...req.query, ...query };
	req.query.limit = "10";
	req.query.priority = "high";
	req.query.sort = "dueDate";
	req.query.page = "1";
	req.query.fields = "title,actions,dueDate";
	next();
};

module.exports = {
	createTodo,
	getAllTodos,
	getTodo,
	updateTodo,
	deleteTodo,
	alaisMostImportantTodos,
};
