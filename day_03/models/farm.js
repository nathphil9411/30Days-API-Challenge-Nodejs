const mongoose = require("mongoose");
const User = require("./users");

const farmSchema = new mongoose.Schema(
	{
		title: { type: String, required: [true, "A farm must have a name"] },
		category: {
			type: String,
			required: [true, "Provide a category of; crop or animal"],
			enum: ["crop", "animal"],
		},
		location: { type: String, required: [true, "Location is needed"] },
		//owner: {type: mongoose.Schema.Types.ObjectId, ref:"User"},
		description: {
			type: String,
			default: function () {
				return `This is ${this.category} farm that is located at  ${this.location}`;
			},
		},
		farmSize: { type: Number },
		rating: { type: Number },
	},
	{ timestamps: true }
);

/* farmSchema.pre("findOneAndUpdate", function (next) {
	this._update.updatedAt = new Date();
	this._update.description = `This is ${this._update.category} farm that is owned by ${this._update.owner}`;
	next();
}); */

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
