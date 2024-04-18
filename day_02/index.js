require("dotenv").config();
const express = require("express");
const app = express();
const todoRouter = require("./routes/todosRouter");
const userRouter = require("./routes/userRoutes");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalError = require("./controller/errorContollers");

//midlewares

app.use(express.json());
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
//routes

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);
app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(globalError);

module.exports = app;
