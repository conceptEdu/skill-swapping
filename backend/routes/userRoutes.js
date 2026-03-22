const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,          // ✅ loginUser की जगह authUser
  updateUserProfile,
  getUsers,
  getUserById,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // ... user create logic
});

// Login
router.post('/login', authUser);   // ✅ यहाँ भी authUser

// Profile Update
router.put('/profile', protect, updateUserProfile);

// Discovery
router.get('/', protect, getUsers);

// Single User Detail
router.get('/:id', protect, getUserById);

module.exports = router;