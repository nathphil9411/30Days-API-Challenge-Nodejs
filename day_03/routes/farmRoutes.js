const express = require("express");
const router = express.Router();
const farmsController = require("./../controller/farmsController");
const { authMiddleware } = require("../middleware/authMidleware");
router
	.route("/")
	.get(farmsController.getAllFarms)
	.post(authMiddleware, farmsController.createNewFarm);
router
	.route("/:id")
	.get(farmsController.getFarm)
	.patch(authMiddleware, farmsController.updateFarm)
	.delete(authMiddleware, farmsController.deleteFarm);

module.exports = router;
