const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // 1. डेटा प्राप्त करें
    const { name, email, password } = req.body;

    // 2. चेक करें कि डेटा आ रहा है या नहीं
    if (!name || !email || !password) {
        return res.status(400).json({
      success: false,
        message: "Missing Fields: नाम, ईमेल और पासवर्ड अनिवार्य हैं।"
    });
    }
    // 3. चेक करें कि यूजर पहले से मौजूद है या नहीं
    const userExists = await User.findOne({ email });
    if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exists: यह ईमेल पहले से पंजीकृत है।"
    });
  }


    // 4. पासवर्ड को सुरक्षित तरीके से हैश करें
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. डेटाबेस में यूजर बनाएं
    const user = await User.create({
        name,
        email,
        password: hashedPassword, // हैश किया हुआ पासवर्ड ही स्टोर करें
    });

    if (user) {
        // 6. सफलता पर डेटा और टोकन वापस भेजें
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data: यूजर बनाने में तकनीकी समस्या।");
    }
});

// @desc    Auth user & get token
// @route   POST /api/users/login
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // पासवर्ड तुलना करें
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password: गलत ईमेल या पासवर्ड।");
    }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.bio = req.body.bio || user.bio;
    if (req.body.teachSkills) user.teachSkills = req.body.teachSkills;
    if (req.body.learnSkills) user.learnSkills = req.body.learnSkills;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      bio: updatedUser.bio,
      teachSkills: updatedUser.teachSkills,
      learnSkills: updatedUser.learnSkills,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('यूजर नहीं मिला');
  }
});
// @desc    Get all users for discovery
// @route   GET /api/users
const getUsers = asyncHandler(async (req, res) => {
  // खुद को छोड़कर बाकी सभी यूजर्स को ढूंढें
  const users = await User.find({ _id: { $ne: req.user._id } }).select('-password');
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (user) res.json(user);
    else { res.status(404); throw new Error('User not found'); }
});

module.exports = { registerUser, authUser, updateUserProfile, getUsers, getUserById };
