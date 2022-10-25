const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./routes/not-found');
const errorHandler = require('./middleware/error-handler');

require('dotenv').config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.static('./public'));

// ROUTES
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (error) {
    console.log({ error });
  }
};

start();
