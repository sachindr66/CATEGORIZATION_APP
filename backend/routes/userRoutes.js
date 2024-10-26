const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { saveUserSelections } = require('../controllers/userController');
const router = express.Router();

router.post('/selections', authMiddleware, saveUserSelections);

module.exports = router;
