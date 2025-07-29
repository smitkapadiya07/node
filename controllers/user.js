const User = require('../models/user');

const handleAllGetUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
};

const handleSingleGetUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            })
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
};

const handleCreateUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}

const handleUpdateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            })
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
};

const handleDeleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({
                error: 'User not found'
            })
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}

module.exports = {handleAllGetUser, handleSingleGetUser, handleCreateUser, handleUpdateUser, handleDeleteUser};