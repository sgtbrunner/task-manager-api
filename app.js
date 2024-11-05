const PORT = 3000;

const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks');
const { TASKS_BASE_URL } = require('./routes/constants');

app.use(express.json());

// ROUTES
app.get('/hello', (req, res) => res.send('Task Manager App'));

app.use(TASKS_BASE_URL, taskRouter);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
