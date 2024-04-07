const express = require("express");
const router = express.Router();
const taskController = require("../contollers/taskscontroller");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTask);
router.post("/", taskController.createTask);
router.patch("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
