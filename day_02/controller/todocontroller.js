const AppError = require("../utils/appError");
const Todo = require("./../models/todoModel");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");

const createTodo = catchAsync(async (req, res, next) => {
	const todo = await Todo.create(req.body);
	res.status(201).json({
		status: "success",
		data: { todo },
	});
});

const getAllTodos = catchAsync(async (req, res, next) => {
	const features = new APIFeatures(Todo.find(), req.query)
		.filter()
		.sort()
		.limit()
		.paginate();

	const todos = await features.query;

	res.status(200).json({ status: "success", data: { todos } });
});

const getTodo = catchAsync(async (req, res, next) => {
	const todo = await Todo.findById(req.params.id);
	if (!todo) {
		return next(new AppError("No task found with the Id", 404));
	}
	res.status(200).json({ status: "success", data: { todo } });
});

const updateTodo = catchAsync(async (req, res, next) => {
	const updateTodo = { ...req.body, updatedAt: Date.now() };

	const todo = await Todo.findByIdAndUpdate(req.params.id, updateTodo, {
		new: true,
		runValidator: true,
	});
	if (!todo) {
		return next(new AppError("No task found with the Id", 404));
	}

	res.status(200).json({ status: "success", data: { todo } });
});

const deleteTodo = catchAsync(async (req, res, next) => {
	const todo = await Todo.findByIdAndUpdate(req.params.id);
	if (!todo) {
		return next(new AppError("No task found with the Id", 404));
	}
	res.status(204).json({ status: "success", data: null });
});

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
const getTodoStats = catchAsync(async (req, res, next) => {
	const stats = await Todo.aggregate([
		{
			$match: { completed: true },
		},
		{
			$group: { _id: "$category", uncompleted: { $sum: 1 } },
		},
	]);
	res.status(200).json({ status: "success", data: { stats } });
});
module.exports = {
	createTodo,
	getAllTodos,
	getTodo,
	updateTodo,
	deleteTodo,
	alaisMostImportantTodos,
	getTodoStats,
};
