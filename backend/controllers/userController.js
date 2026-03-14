const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // fixed path
const generateToken = require('../utils/generateToken');

//@desc Authuser & get token
//@route POST /api/users/login
 const authUser = asyncHandler( async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    //compare password using Bcrypt
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id), //sends token
        });
    }else{
        res.status(401);
        throw new Error("Wrong email or password")
    }
 });

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all the fields..." });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
        return res.status(409).json({ message: "User already exists..." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400).json({ message: "Unsuccessful to create user..." });
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
// @desc    Get user by ID
// @route   GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('यूजर नहीं मिला');
  }
});


module.exports = { registerUser,authUser,updateUserProfile,getUsers,getUserById};