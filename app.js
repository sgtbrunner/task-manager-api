const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks');
const { connectDB } = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
const { TASKS_BASE_URL } = require('./routes/constants');

// CONSTANTS
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.static('./public'));
app.use(express.json());

// ROUTES
app.use(TASKS_BASE_URL, taskRouter); // Tasks route
app.use(notFound); //; Fallback
app.use(errorHandler);

const start = async () => {
  try {
    const response = await connectDB(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${response.connection.host}`);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.error(error);
    console.log(
      'Cannot start application due to an error. See above for more details'
    );
    process.exit(1);
  }
};

start();
