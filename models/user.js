const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        gender: {
            type: String,
            required: [true, 'Gender is required'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

