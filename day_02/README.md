# Day 2: Todo CRUD API

Day 2 of our 30 days Node.js API challenge! Everyone has equal 24hrs in a day but everyone results are different. This todo API would help in planing our day to day activities by oragnization out todos and mostimportantly outline how we can achieve our set out todos.
Today we would create a Todo CRUD API, that could be able to create, read, update and delete todos.

## Project Overview

The Todo API will allow users to perform the following operations:
-Create a new todo
-Retrieve all the todos
-Retrieve a single todo by ID
-Retrieve a collection of todos filtered by category
-Update an existing todo
-Delete a todo
-filter todo based on completion or priority

## Setup Instructions

Follow these steps to setup and run the project:

1. **Clone the repository if you have not done it already**
   `git clone https://github.com/nathphil9411/30Days-API-Challenge-Nodejs.git`

2. **Navigate to the project**:
   `cd day_02`

3. **Install Dependencies**:
   `npm install `

4. **Set up the database**:
   -You can use MongoDB for this project, you could use any relational database type. Make sure you have MongoDB installed and running on your local machine or use a cloud-based MongoDB service like MongoDB Atlas
   -Update the database connection string in the '.env' file with your MongoDB URI.

   > [!WARNING]
   > Always add '.env' files in the .gitIgnore file before commiting your code

5. **Start the Server**:
   `npm Start`

   > [!NOTE]
   > Ensure that the package.json file has a start script in the the scripts.

6. 6. _Explore the API_:

- Once the server is running, you can interact with the API using tools like cURL, Postman, or your browser.
- Refer to the API documentation for a list of available endpoints and how to use them.

## Implementation Details

The Farm todo Manager CRUD API is implemented using Node.js and Express.js framework. It utilizes MongoDB as the database for storing todos and Mongoose as the ODM (Object-Document Mapper) for interacting with MongoDB. MongoDB is chosen because of the nature of data that comes from various spheres of life activities, which is usually varied data.

The API includes the following endpoints:

- POST /api/v1/todos: Create a new todo
- GET /api/v1/todos: Retrieve a list of all todos
- GET /api/v1/todos/:id: Retrieve a single todo by its ID
- PATCH /api/v1/todos/:id: Update an existing todo
- DELETE /api/v1/todos/:id: Delete a todo

## Additional Resources

- [MongoDB Official Documentation](https://docs.mongodb.com/): Learn more about MongoDB and how to set it up.
- [Mongoose Official Documentation](https://mongoosejs.com/docs/): Explore the features and functionalities of Mongoose for MongoDB.
- [Express.js Official Documentation](https://expressjs.com/): Refer to the Express.js documentation for information on building web applications with Node.js.

## Share Your Progress

Don't forget to share your progress with the community using the hashtag #NodeAPIChallenge! Feel free to ask questions, share insights, and showcase your work as you complete each day's challenge. Remember journey a a thousand miles starts with a step.

Happy coding!
