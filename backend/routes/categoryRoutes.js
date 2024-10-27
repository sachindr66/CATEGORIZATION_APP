// Category
const express = require('express');
const { getCategories } = require('../controllers/categoryController');
const Category = require('../models/Category');
const router = express.Router();

router.get('/', getCategories);

module.exports = router;

