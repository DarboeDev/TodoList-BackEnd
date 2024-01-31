const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    completed: {
      type: Boolean,
      default: false,
      required: false,
    },
    importance: {
      type: Boolean,
      default: false,
      required: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: false,
    },
    duedate:{
      type: String,
      required: false,
    },
    remindTime:{
      type: String,
      required: false,
    }
  },
});

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;
