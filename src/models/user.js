const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    uid: {
        type: String,
        required: [true, 'UID is needed'],
        unique: true
    },
    photoURL: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;