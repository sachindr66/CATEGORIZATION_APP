// const Category = require('../models/Category');

// exports.getCategories = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 6;
//   const skip = (page - 1) * limit;

//   const totalItems = await Category.countDocuments();
//   const categories = await Category.find().skip(skip).limit(limit);

//   res.json({ categories, totalItems });
// };


// backend/controllers/categoryController.js
const Category = require('../models/Category');

// Get paginated categories
exports.getCategories = async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 6; // Default to 6 items per page

  try {
    const categories = await Category.find()
      .skip((page - 1) * limit) // Skip items for previous pages
      .limit(limit); // Limit results to specified per-page count

    const totalItems = await Category.countDocuments(); // Count total categories

    res.json({
      categories,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};
