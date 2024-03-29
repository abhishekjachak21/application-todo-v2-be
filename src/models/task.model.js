// models/task.model.js
import mongoose from 'mongoose';
// import userSchema from './user.model.js'

const taskSchema = new mongoose.Schema({
  writeTask: {
    type: String,
    required: [true, "Task is required"]
  },
  targetTime: {
    type: Number,
    required:  [true, "Target time is required"]
  },
  actualTime: {
    type: Number,
    default: undefined,
  },
  completed: {
    type: Boolean,
    default: false
  },
  // username: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User', // Reference to the User model
  //   // required: true
  username: {
    type: String, // Assuming username is a string field
    // required: true
  }

  
}, 
{ timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;



