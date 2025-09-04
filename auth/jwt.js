const jwt = require('jsonwebtoken');
require('dotenv').config();

// Generate JWT Token with expiry (default: 1 day)
const generateToken = (id, expiresIn = '1d') => {
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }

    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

// Verify and decode token
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error('JWT verification failed:', error.message);
        return null;
    }
};

module.exports = { generateToken, verifyToken };
