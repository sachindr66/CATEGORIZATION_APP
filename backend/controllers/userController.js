const User = require('../models/User');

exports.saveUserSelections = async (req, res) => {
  const { selectedCategories } = req.body;
  const userId = req.user.userId;

  console.log("Selected Categories:", selectedCategories);
  console.log("User ID:", userId);
  try {
    await User.findByIdAndUpdate(userId, { selectedCategories });
    res.json({ message: 'Selections saved' });
  } catch (error) {
    console.error('Error saving selections:', error);
    res.status(500).json({ message: 'Failed to save selections' });
  }
};
