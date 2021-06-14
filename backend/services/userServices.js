const jwt = require('jsonwebtoken');
const data = require('../data');
const User = require('../models/userModel.js');

exports.getUser = (userEmail) => {
  return User.findOne({ email: userEmail });
};

exports.insertUsers = () => {
  User.remove();
  return User.insertMany(data.users);
};

exports.saveNewUser = (user) => {
  const newUser = new User({
    name: user.name,
    email: user.email,
    password: user.password,
  });
  return newUser.save();
};

exports.generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};
