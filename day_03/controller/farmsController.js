const Farm = require("./../models/farm");

const getAllFarms = async (req, res) => {
	try {
		const queryObj = { ...req.query };
		const excludedFields = ["fields", "page", "limit", "sort"];
		excludedFields.forEach((field) => delete queryObj[field]);
		let query = Farm.find(queryObj);
		if (req.query.fields) {
			fieldQuery = req.query.fields.split(",").join(" ");
			query = query.select(fieldQuery);
		} else {
			query = query.select("-__v");
		}
		if (req.query.sort) {
			sortQuery = req.query.sort.split(",").join(" ");
			query = query.sort(sortQuery);
		} else {
			query = query.sort("-createdAt");
		}

		const allFarms = await query;
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
