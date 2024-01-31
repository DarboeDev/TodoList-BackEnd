const CategoryModel = require('../models/categoryModel');

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await CategoryModel.create({ ...req.body  });
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(`Error while creating category: ${error}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCategories =  async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.json(categories);
        console.log("Categories retrieved successfully");
    } catch (error) {
        console.error(`Error while getting categories: ${error}`);
        res.status(500).json({ error: error.message });
    }
}
exports.deleteCategory = async (req, res) => {
  try {
    const {id} = req.params;
    const categoryToDelete = await CategoryModel.findOneAndDelete({_id:id})
    if (!categoryToDelete) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  }