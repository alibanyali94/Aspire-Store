import jwt from 'jsonwebtoken'
import data from '../data.js';
import User from '../models/userModel.js';

export const getUser = (userEmail) => {
    return User.findOne({ email: userEmail });

}
export const insertUsers = () => {
    return User.insertMany(data.users);
}

export const saveNewUser = (userName, email, password) => {
    const newUser = new User({
        name: userName,
        email: email,
        password: password
    })
    return newUser.save();
}




export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET || 'somethingsecret', {
        expiresIn: '30d',
    })
}