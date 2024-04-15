const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema({
	title: { type: String, required: [true, "A farm must have a name"] },
	category: {
		type: String,
		required: [true, "Provide a category of; crop or animal"],
	},
	location: { type: String, required: [true, "Location is needed"] },
	owner: { type: String, required: [true, "Name of owner is needed"] },
	description: {
		type: String,
		default: function () {
			return `This is ${this.category} farm that is owned by ${this.owner}`;
		},
	},
	createdAt: { type: Date, default: Date.now(), select: false },
	updatedAt: { type: Date, default: Date.now(), select: false },
	farmSize: { type: Number },
});

farmSchema.pre("findOneAndUpdate", function (next) {
	this._update.updatedAt = new Date();
	this._update.description = `This is ${this._update.category} farm that is owned by ${this._update.owner}`;
	next();
});

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
