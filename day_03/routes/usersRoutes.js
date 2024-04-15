const express = require("express");
const router = express.Router();

const usersController = require("./../controller/usersController");

router
	.route("/")
	.get(usersController.getAllusers)
	.post(usersController.createNewuser);
router
	.route("/:id")
	.get(usersController.getuser)
	.patch(usersController.updateuser)
	.delete(usersController.deleteuser);

module.exports = router;
