const express = require("express");
const router = express.Router();
const todoController = require("../controller/todocontroller");

router
	.route("/most-important-todos")
	.get(todoController.alaisMostImportantTodos, todoController.getAllTodos);
router
	.route("/")
	.get(todoController.getAllTodos)
	.post(todoController.createTodo);

router
	.route("/:id")
	.get(todoController.getTodo)
	.patch(todoController.updateTodo)
	.delete(todoController.deleteTodo);

module.exports = router;
