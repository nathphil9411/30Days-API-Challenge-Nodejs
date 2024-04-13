const express = require("express");
const app = express();
const farmRouter = require("./routes/farmRoutes");
//midlewares
app.use(express.json());
app.use("/api/v1/farms", farmRouter);

module.exports = app;
