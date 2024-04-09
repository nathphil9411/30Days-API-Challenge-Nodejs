const express = require("express");
const router = express.Router();
const todoController = require("../controller/todocontroller");

router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodo);
router.post("/", todoController.createTodo);
router.patch("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);
module.exports = router;
