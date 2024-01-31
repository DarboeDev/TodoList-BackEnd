const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categoryController.js');

router.post('/add',categoryControllers.createCategory);
router.get('/', categoryControllers.getCategories);
router.delete('/:id', categoryControllers.deleteCategory);



module.exports = router;
