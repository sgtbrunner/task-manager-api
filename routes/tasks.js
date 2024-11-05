const express = require('express');
const router = express.Router();

const { ROOT_URL, TASK_ID } = require('./constants');

const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require('../controllers/tasks');

// GET ALL TASKS
router.route(ROOT_URL).get(getAllTasks);

// CREATE A TASK
router.route(ROOT_URL).post(createTask);

// GET A SPECIFIC TASK
router.route(TASK_ID).get(getTask);

// UPDATE A SPECIFIC TASK
router.route(TASK_ID).patch(updateTask);

// DELETE A TASK
router.route(TASK_ID).delete(deleteTask);

module.exports = router;
