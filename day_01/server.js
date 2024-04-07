const mongoose = require("mongoose");
const app = require("./index");
require("dotenv").config();

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
