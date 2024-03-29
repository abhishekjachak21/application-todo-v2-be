
import express from 'express';
import { getAllTasks, addTask, deleteTask , updateTask} from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.route('/getAllTasks').get(getAllTasks)
taskRouter.route('/addTask').post(addTask);
taskRouter.route('/deleteTask/:id').delete(deleteTask);
taskRouter.route('/updateTask/:id').patch(updateTask);

// Route to get all tasks
// router.get('/', getAllTasks);
// router.route("/getAllTasks").get(getAllTasks)
// router.route("/getAllTasks").get(getAllTasks)
// router.route("/getAllTasks").get(getAllTasks)
// router.route("/getAllTasks").get(getAllTasks)

// Route to add a new task
// router.post('/', addTask);
// router.route('/addTask').post(addTask);

// Route to delete a task
// router.delete('/:id', deleteTask);
// router.route('/:id').delete(deleteTask);

// Route to update a task
// router.put('/:id', updateTask);
// router.route('/:id').put(updateTask);

export default taskRouter;
