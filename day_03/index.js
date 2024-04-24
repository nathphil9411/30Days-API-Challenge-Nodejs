const express = require("express");
const app = express();
const farmRouter = require("./routes/farmRoutes");
const userRouter = require("./routes/usersRoutes");
//midlewares
app.use(express.json());
app.use("/api/v1/farms", farmRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
