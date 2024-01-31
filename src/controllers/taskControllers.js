const mongoose = require("mongoose");
const  TaskModel = require("../models/taskModels");


const { Request, Response } = require("express");


exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
    console.log("Tasks retrieved successfully");
  } catch (error) {
    console.error(`Error while finding tasks: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask =  await TaskModel.create({ ...req.body });
    return res.status(200).json(newTask);
  } catch (error) {
    console.error(`Error while creating task: ${error}`);
    res.status(500).json({ error: error.message });
  }
};

exports.getSingleTask = async (req,res) =>{
  const {id} = req.params;
  try {
    const task = await TaskModel.findById(id);
    res.json(task);
    console.log("Tasks retrieved successfully");
  } catch (error) {
    console.error(`Error while finding this task: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    let updatedTask;

    // Retrieve existing task to get its current values
    const existingTask = await TaskModel.findById(id);

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update only the provided fields
    const updatedFields = {
      title,
      description: {
        ...existingTask.description, // Keep existing values
        ...description, // Update with new values
      },
    };

    updatedTask = await TaskModel.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.deleteTask =  async (req, res) => {
  const {id} = req.params;
try {
   const taskToDelete = await TaskModel.findOneAndDelete({_id: id});
   if (!taskToDelete) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json({ message: 'Task deleted successfully'});
} catch (error) {
  res.status(500).json({ error: error.message });
}
}