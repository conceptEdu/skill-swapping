const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // यह टोकन यूजर की ID को एनकोड करेगा और 30 दिनों तक वैलिड रहेगा
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // चेक करें कि क्या हेडर में 'Authorization' और 'Bearer' है
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // हेडर से टोकन निकालें (Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // टोकन को डिकोड करें
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // डिकोड की गई ID से यूजर का डेटा निकालें (पासवर्ड को छोड़कर)
      req.user = await User.findById(decoded.id).select('-password');

      next(); // अगले फंक्शन (कंट्रोलर) पर जाने दें
    } catch (error) {
      console.error(error);
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