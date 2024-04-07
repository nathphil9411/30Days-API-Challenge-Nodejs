const Task = require("../models/taskModel");

const createTask = async (req, res) => {
	try {
		const newTask = await Task.create(req.body);
		res.status(201).json({
			status: "success",
			data: { newTask },
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
const getAllTasks = async (req, res) => {
	try {
		const allTasks = await Task.find();
		res.status(200).json({ status: "success", data: { allTasks } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
const getTask = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);
		res.status(200).json({ status: "success", data: { task } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

const updateTask = async (req, res) => {
	try {
		const updatedtask = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidator: true,
		});
		res.status(200).json({ status: "success", data: { updatedtask } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

const deleteTask = async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);
		res.status(200).json({ status: "success", data: null });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
