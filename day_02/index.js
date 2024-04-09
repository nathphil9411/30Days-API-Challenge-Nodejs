const express = require("express");
const app = express();
const todoRouter = require("./routes/todosRouter");

//midlewares

app.use(express.json());

//routes

app.use("/api/v1/todos", todoRouter);

module.exports = app;
