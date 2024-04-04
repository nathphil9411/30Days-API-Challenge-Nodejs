const getAllTasks = (req, res) => {
	res
		.status(200)
		.json({ status: "success", data: { message: "all ask rendenders" } });
};
const createTask = (req, res) => {
	res
		.status(201)
		.json({ status: "success", data: { message: "new task created" } });
};

const updateTask = (req, res) => {
	res
		.status(200)
		.json({ status: "success", data: { message: "task updated" } });
};

const deleteTask = (req, res) => {
	res
		.status(200)
		.json({ status: "success", data: { message: "task deleted" } });
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
