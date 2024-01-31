const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  color:{
    type: String,
    required: false,
  }
});

const CategoryModel = mongoose.model('Category', categorySchema);
module.exports = CategoryModel;
