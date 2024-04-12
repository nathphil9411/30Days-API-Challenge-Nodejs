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
		//filter according to categories
		const queryObj = { ...req.query };
		const excludedField = ["page", "sort", "limit", "fields"];
		excludedField.forEach((el) => delete queryObj[el]);
		let query = Todo.find(queryObj);

		//Sort according to categories.
		if (req.query.sort) {
			const sortBy = req.query.sort.split(",").join(" ");
			query = query.sort(sortBy);
		} else {
			query = query.sort("-createdAt");
		}
		//limiting the fields to be shown
		if (req.query.fields) {
			const fields = req.query.fields.split(",").join(" ");
			query = query.select(fields);
		} else {
			query = query.select("-__v");
		}
		const page = req.query.page * 1 || 1;
		const limit = req.query.limit * 1 || 10;
		const skip = (page - 1) * limit;
		query = query.skip(skip).limit(limit);
		if (req.query.page) {
			const allTodos = await Todo.countDocuments();
			if (skip >= allTodos) throw new Error("this page does not exist");
		}

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
	req.query.limit = "5";
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
