# Day 1: Farm Registry App

Welcome to the third day of the 30 days api challenge, Today I would be working on a farm registry api. We would be working on authorization and normal CRUD operation. The farm registry app would be able to create, read, update and delete farm information and offcourse some routes would need authorization.

## Project Overview

The Farm registry API will allow farmers to perform the following operations:
-Create a new farm
-Retrieve all the farms
-Retrieve a farm by ID
-Retrieve a collection of farms by location or business type
-Update their farm
-Delete their farm

## Setup Instructions

Follow these steps to setup and run the project:

1. **Clone the repository if you have not done it already**
   check thr farm_registy branch and clone accordingly
   `git clone https://github.com/nathphil9411/30Days-API-Challenge-Nodejs.git`

2. **Navigate to the project**:
   `cd day_03`

3. **Install Dependencies**:
   `npm install `

4. **Set up the database**:
   -You can use MongoDB for this project. Make sure you have MongoDB installed and running on your local machine or use a cloud-based MongoDB service like MongoDB Atlas
   -Update the database connection string in the '.env' file with your MongoDB URI.

   > [!Warning]
   > Always add '.env' files in the .gitIgnore file before commiting your code

5. **Start the Server**:
   `npm Start`

   > [!note]
   > Ensure that the package.json file has a start script in the the scripts.

6. 6. _Explore the API_:

- Once the server is running, you can interact with the API using tools like cURL, Postman, or your browser.
- Refer to the API documentation for a list of available endpoints and how to use them.

## Implementation Details

The Farm registry api is implemented using Node.js and Express.js framework. It utilizes MongoDB as the database for storing farm information and Mongoose as the ODM (Object-Document Mapper) for interacting with MongoDB. MongoDB is chosen because of the nature of data that comes from the farm

The API includes the following endpoints:

- POST /api/v1/farms: Create a new farm
- GET /api/v1/farms: Retrieve a list of all farms
- GET /api/v1/farms/:id: Retrieve a single farm by its ID
- PATCH /api/v1/farms/:id: Update an existing farm
- DELETE /api/v1/farms/:id: Delete a farm
- POST /api/v1/register: register a user
- POST /api/v1/login: Login a user

## Additional Resources

- [MongoDB Official Documentation](https://docs.mongodb.com/): Learn more about MongoDB and how to set it up.
- [Mongoose Official Documentation](https://mongoosejs.com/docs/): Explore the features and functionalities of Mongoose for MongoDB.
- [Express.js Official Documentation](https://expressjs.com/): Refer to the Express.js documentation for information on building web applications with Node.js.

## Share Your Progress

Don't forget to share your progress with the community using the hashtag #NodeAPIChallenge! Feel free to ask questions, share insights, and showcase your work as you complete each day's challenge.

Happy coding!
