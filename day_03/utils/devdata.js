require("dotenv").config();
const mongoose = require("mongoose");
const Farm = require("./../models/farm");
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
const farms = [
	{
		title: "Sunshine Farms",
		category: "crop",
		location: "123 Main Street, Anytown, USA",
		owner: "John Doe",
		farmSize: 100,
	},
	{
		title: "Happy Hooves Ranch",
		category: "animal",
		location: "456 Elm Street, Sometown, USA",
		owner: "Jane Smith",
		farmSize: 50,
	},
	{
		title: "Golden Fields",
		category: "crop",
		location: "789 Oak Avenue, Othertown, USA",
		owner: "Mark Johnson",
		farmSize: 150,
	},
	{
		title: "Paws and Claws Sanctuary",
		category: "animal",
		location: "101 Pine Road, Villagetown, USA",
		owner: "Sarah Brown",
		farmSize: 30,
	},
	{
		title: "Green Pastures Farm",
		category: "crop",
		location: "222 Maple Lane, Countryside, USA",
		owner: "Michael Lee",
		farmSize: 200,
	},
	{
		title: "Blue Sky Ranch",
		category: "animal",
		location: "333 Cedar Drive, Hillside, USA",
		owner: "Emily White",
		farmSize: 75,
	},
	{
		title: "Harvest Haven",
		category: "crop",
		location: "444 Walnut Street, Mountainview, USA",
		owner: "David Davis",
		farmSize: 120,
	},
];

const importData = () => {
	Farm.create(farms)
		.then((createdFarms) => {
			console.log("Successfully inserted farms:", createdFarms);
		})
		.catch((error) => {
			console.error("Error inserting farms:", error);
		});
};
importData();
