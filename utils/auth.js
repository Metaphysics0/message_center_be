const jwt = require('jsonwebtoken');

// create JWT
exports.createJWT = (email, userId, duration) => {
  const payload = {
    email,
    userId,
    duration,
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: duration,
  });
};

// Verify JWT
exports.verifyJWT = (token) => {
  return jwt.verify(token, 'secret');
};
