const jwt = require('jsonwebtoken');

// Replace this with your actual secret key
const secretKey = 'your_secret_key'; 

const getToken = (user) => {
  // Assuming user is an object containing relevant information for the token payload
  const payload = {
    userId: user.userId,
    //username: user.username,
    
  };

  // Generate JWT token
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

  return token;
};

module.exports = getToken;
