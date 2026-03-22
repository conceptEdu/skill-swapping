const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,          // loginUser की जगह authUser
  updateUserProfile,
  getUsers,
  getUserById,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Register
router.post('/register', registerUser);   // ❌ async function हटाकर controller लगाया

// Login
router.post('/login', authUser);          // सही है

// Profile Update
router.put('/profile', protect, updateUserProfile);

// Discovery
router.get('/', protect, getUsers);

// Single User Detail
router.get('/:id', protect, getUserById);

module.exports = router;