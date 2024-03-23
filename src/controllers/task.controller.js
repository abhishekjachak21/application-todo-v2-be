// controllers/taskController.js

import Task from '../models/task.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';


// Function to get all tasks
async function getAllTasks(req, res) {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Function to add a new task
async function addTask(req, res) {
    const { writeTask, targetTime } = req.body;

    try {
        const newTask = new Task({
            writeTask,
            targetTime,
            completed: false,
            actualTime: null
        });

        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Function to delete a task by ID
async function deleteTask(req, res) {
    const taskId = req.params.id;

    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// // // Function to update a task by ID
// async function updateTask(req, res) {
//     const taskId = req.params.id;
//     const { actualTime, completed } = req.body;

//     try {
//         const updatedTask = await Task.findByIdAndUpdate(
//             taskId,
//             { actualTime, completed },
//             { new: true }
//         );

//         if (!updatedTask) {
//             return res.status(404).json({ error: 'Task not found' });
//         }

//         res.status(200).json(updatedTask);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

import { Types } from 'mongoose';

const { ObjectId } = Types;

// Function to update a task by ID
async function updateTask(req, res) {
    const taskId = req.params.id;

    // Check if the taskId is a valid ObjectId
    if (!ObjectId.isValid(taskId)) {
        return res.status(400).json({ error: 'Invalid task ID' });
    }

    const { actualTime, completed } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { actualTime, completed },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}





// Export the controller functions
export {
    getAllTasks,
    addTask,
    deleteTask,
    updateTask
};












/*
// Get all tasks
export const getAllTasks = asyncHandler(async (req, res) => {
    
    const allTasks = await Task.find();

    res
    .status(200)
    .json(new ApiResponse(
      201,{allTasks},"all task fetched successfully"));
});




// Add a new task
// export const addTask = asyncHandler(async (req, res, next) => {
//   const { writeTask, targetTime } = req.body;

//   if (!writeTask) {
//     return next(new ApiError(400, "Both 'writeTask' are required"));
//   }
//   if (!targetTime) {
//     return next(new ApiError(400, "Both 'targetTime' are required"));
//   }
//   // Create a new task instance
//   const task = new Task({ writeTask, targetTime, completed: false });

//   // Save the task to the database
//   await task.save();

//   res.status(201).json({
//     success: true,
//     data: task
//   });
// });


// Other controller functions omitted for brevity





// // Add a new task
export const addTask = asyncHandler(async (req, res) => {
  const { writeTask, targetTime, completed } = req.body;
  const oneTask = await Task.create({ writeTask, targetTime, completed });
  res
  .status(200)
  .json(new ApiResponse(201,{oneTask},"Added task successfully"));
});


// Delete a task
export const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
 
  if (!task) {
    throw new ApiError(404, 'Task not found');
  }
 
  await task.remove();
  res.status(200).json({ message: 'Task removed' });
});






// // Update a task
export const updateTask = asyncHandler(async (req, res) => {
  const { writeTask, targetTime, completed } = req.body;
  let task = await Task.findById(req.params.id);
  if (!task) {
    throw new ApiError(404, 'Task not found');
  }
  if (writeTask) task.writeTask = writeTask;
  if (targetTime) task.targetTime = targetTime;
  if (completed !== undefined) task.completed = completed;
  task = await task.save();
  res.status(200).json(task);
});
*/