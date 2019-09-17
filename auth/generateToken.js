const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // ...otherdata
  };

  const options = {
    expiresIn: '1d', 
  },

  return jwt.sign(payload, secrets.jwtSecret, options); 
}

module.exports = generateToken;