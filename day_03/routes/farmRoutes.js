const express = require("express");
const router = express.Router();
const farmsController = require("./../controller/farmsController");

router
	.route("/")
	.get(farmsController.getAllFarms)
	.post(farmsController.createNewFarm);
router
	.route("/:id")
	.get(farmsController.getFarm)
	.patch(farmsController.updateFarm)
	.delete(farmsController.deleteFarm);

module.exports = router;
