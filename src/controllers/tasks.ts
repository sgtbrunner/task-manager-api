import Task from '../models/Task';
import asyncWrapper from '../middleware/async';
import { createCustomError } from '../errors/custom';
import { Request, Response, NextFunction } from 'express';

export const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const createTask = asyncWrapper(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

export const getTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await Task.findById(taskId);

    if (!task) {
      return next(createCustomError(`No task with id ${taskId}`, 404));
    }

    res.status(200).json({ task });
  }
);

export const deleteTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);

    return !task
      ? next(createCustomError(`No task with id ${taskId}`, 404))
      : res.status(200).json({ task });
  }
);

export const updateTask = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const data = req.body;

    if (!data?.name) {
      return next(createCustomError('No valid body provided', 400));
    }

    const task = await Task.findByIdAndUpdate(taskId, data, {
      new: true,
      runValidators: true,
    });

    return !task
      ? next(createCustomError(`No task with id ${taskId}`, 404))
      : res.status(200).json({ task });
  }
);
