const app = require("./index");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((err) => {
		console.log("Sorry you are offline");
	});

app.listen(PORT, () => console.log(`connected on port ${PORT}`));
