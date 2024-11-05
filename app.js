const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks');
const { connectDB } = require('./db/connect');
require('dotenv').config();
const { TASKS_BASE_URL } = require('./routes/constants');

// CONSTANTS
const PORT = 3000;

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/hello', (req, res) => res.send('Task Manager App'));

app.use(TASKS_BASE_URL, taskRouter);

const start = async () => {
  try {
    const response = await connectDB(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${response.connection.host}`);
    app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.error(error);
    console.log(
      'Cannot start application due to an error. See above for more details'
    );
    process.exit(1);
  }
};

start();
