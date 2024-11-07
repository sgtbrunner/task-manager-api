import express from 'express';
import { ROOT_URL, TASK_ID } from './constants';
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks';

const router = express.Router();

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

export default router;
