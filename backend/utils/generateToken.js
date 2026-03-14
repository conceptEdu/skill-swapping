const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // यह टोकन यूजर की ID को एनकोड करेगा और 30 दिनों तक वैलिड रहेगा
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;