const express = require('express');
const router = express.Router();
const taskControllers = require('../controllers/taskControllers.js');




// routes for handling tasks
router.get('/', taskControllers.getAllTasks);
router.route('/:id').get(taskControllers.getSingleTask).delete(taskControllers.deleteTask).put(taskControllers.updateTask);
router.post('/add', taskControllers.createTask);


module.exports = router;

