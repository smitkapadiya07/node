const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const auth = require('../models/auth')
require('dotenv').config();


const handleRegister = async (req, res) => {
    const { name , email, password } = req.body;
    if (!name || !email || !password ) {
        res.status(400).json({
            error: 'Please enter a valid email',
        })
    }
    try {
        const exist = await auth.findOne({email})
        if (exist) {
            res.status(400).json({
                error: 'Email already exists',
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new auth({name, email,password: hashedPassword})
        await user.save()
        res.status(200).json({
            message:"user successfully registered",
            user
        })
    }catch(err){
        res.status(500).json({
            error: err.message,
        })
    }
}

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            error: 'Please enter a valid email',
        })
    }

    const user = await auth.findOne({email})
    if (!user) {
        res.status(400).json({
            error: 'Please enter a valid email',

        })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400).json({
            error: 'Passwords do not match',
        })
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
    res.status(200).json({
        token,
    })

}

module.exports = {handleRegister , handleLogin}
