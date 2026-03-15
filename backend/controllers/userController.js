const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    अकाउंट रजिस्टर करें (Register User)
// @route   POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // 1. वैलिडेशन: चेक करें कि क्या सभी फील्ड्स भरे गए हैं
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("कृपया नाम, ईमेल और पासवर्ड सभी भरें।");
    }

    // 2. चेक करें कि यूजर पहले से तो मौजूद नहीं है
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(409);
        throw new Error("यह ईमेल पहले से रजिस्टर्ड है।");
    }

    // 3. पासवर्ड को हैश करना (Salting & Hashing)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. नया यूजर बनाएं
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
            token: generateToken(user._id), // रजिस्ट्रेशन के तुरंत बाद टोकन देना जरूरी है
        });
    } else {
        res.status(400);
        throw new Error("यूजर बनाने में विफलता, कृपया डेटा चेक करें।");
    }
});

// @desc    लॉगिन और टोकन प्राप्त करें (Auth User)
// @route   POST /api/users/login
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // पासवर्ड की तुलना करें
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("गलत ईमेल या पासवर्ड।");
    }
});

// @desc    यूजर प्रोफाइल अपडेट करें
// @route   PUT /api/users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.bio = req.body.bio || user.bio;
        
        if (req.body.teachSkills) user.teachSkills = req.body.teachSkills;
        if (req.body.learnSkills) user.learnSkills = req.body.learnSkills;

        // अगर यूजर पासवर्ड भी अपडेट करना चाहता है
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

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
        throw new Error('यूजर नहीं मिला।');
    }
});

// @desc    डिस्कवरी के लिए सभी यूजर्स को लाएं
// @route   GET /api/users
const getUsers = asyncHandler(async (req, res) => {
    // खुद को छोड़कर बाकी सभी को दिखाएं
    const users = await User.find({ _id: { $ne: req.user._id } }).select('-password');
    res.json(users);
});

// @desc    आईडी द्वारा यूजर की जानकारी लें
// @route   GET /api/users/:id
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('यूजर नहीं मिला।');
    }
});

module.exports = { 
    registerUser, 
    authUser, 
    updateUserProfile, 
    getUsers, 
    getUserById 
};
