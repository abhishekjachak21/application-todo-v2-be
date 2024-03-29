// controllers/taskController.js

import Task from '../models/task.model.js';
import {User} from '../models/user.model.js';
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

// // Function to add a new task
// async function addTask(req, res) {
//     const { writeTask, targetTime, userId } = req.body;
//  console.log(req.body);
//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             throw new ApiError(400, 'User not found');
//         }

//         const newTask = new Task({
//             writeTask,
//             targetTime,
//             username:userId,
//             completed: false,
//             actualTime: null
//         });

//         await newTask.save();
//         res.status(201).json(newTask);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// Function to add a new task
async function addTask(req, res) {
    const { writeTask, targetTime } = req.body;
console.log(req.body);
    try {
        const newTask = new Task({
            writeTask,
            targetTime,
            // username,
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







