const userServices = require('../../services/userServices.js');
const bcrypt = require('bcrypt');

//saveUsers
exports.saveUsersController = async (req, res) => {
  const createdUsers = await userServices.insertUsers();
  res.send({ createdUsers });
};

//login
exports.loginController = async (req, res) => {
  const user = await userServices.getUser(req.body.email);

  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: userServices.generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalied User Email or Password' });
};
//register
exports.registerController = async (req, res) => {
  const { name, email, password } = req.body;

  const user = { name, email, password: bcrypt.hashSync(password, 8) };
  const createdUsers = await userServices.saveNewUser(user);

  res.send({ user: createdUsers });
};
