const express = require("express");
const app = express();
const taskrouter = require("./routes/taskRoutes");

//midlewares
app.use(express.json());

//routes
app.use("/api/v1/tasks", taskrouter);

module.exports = app;
