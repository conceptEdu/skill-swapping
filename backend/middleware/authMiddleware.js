const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token; // यहाँ define किया गया है

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      
      // header से token निकालो
      token = req.headers.authorization.split(' ')[1];

      // token verify करो
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded ID:", decoded.id);
      // decoded.id से user निकालो
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      res.status(401);
      throw new Error('अधिकृत नहीं, टोकन विफल रहा');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('अधिकृत नहीं, कोई टोकन नहीं मिला');
  }
});

module.exports = { protect };