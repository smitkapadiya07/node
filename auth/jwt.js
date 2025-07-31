const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    }catch (error) {
        console.log(error.message);
        return null;
    }
}

module.exports = { verifyToken , generateToken};