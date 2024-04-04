const express = require("express");
const router = express.Router();
const taskcontroller = require("../contollers/taskscontroller");

router.get("/", taskcontroller.getAllTasks);
router.post("/", taskcontroller.createTask);
router.patch("/:taskid", taskcontroller.updateTask);
router.delete("/:taskid", taskcontroller.deleteTask);

module.exports = router;
