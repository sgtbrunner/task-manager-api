const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    const error = new Error('Not Found');
    error.status = 404;
    return next(error);
  }
  return task
    ? res.status(200).json({ task })
    : next(createCustomError(`No task with id: ${taskId}`, 404));
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  return task
    ? res.status(200).json({ task })
    : res.status(404).json({ msg: `No task with id: ${taskId}` });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  return task
    ? res.status(200).json({ task })
    : res.status(404).json({ msg: `No task with id: ${taskId}` });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
