const Farm = require("./../models/farm");

const getAllFarms = async (req, res) => {
	try {
		const allFarms = await Farm.find();
		res.status(200).json({ status: "success", data: { allFarms } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
const createNewFarm = async (req, res) => {
	try {
		const newFarm = await Farm.create(req.body);
		res.status(201).json({
			status: "success",
			data: { newFarm },
		});
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
const getFarm = async (req, res) => {
	try {
		const farm = await Farm.findById(req.params.id);
		res.status(200).json({ status: "success", data: { farm } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
const updateFarm = async (req, res) => {
	try {
		const updatedFarm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidator: true,
		});
		res.status(200).json({ status: "success", data: { updatedFarm } });
	} catch (err) {
		res.status(400).json({
			status: "fail",
			message: err.message,
		});
	}
};
const deleteFarm = async (req, res) => {
	try {
		await Farm.findByIdAndDelete(req.params.id);
		res.status(204).json({ status: "success", data: null });
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err.message,
		});
	}
};

module.exports = {
	getAllFarms,
	createNewFarm,
	getFarm,
	updateFarm,
	deleteFarm,
};
