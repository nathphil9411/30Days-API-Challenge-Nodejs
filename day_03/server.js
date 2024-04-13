require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./index");

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("db is connected"))
	.catch((err) => {
		console.log(err);
	});

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`app connected on port ${PORT}`);
});
