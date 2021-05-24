import { generateToken, insertUsers, getUser, saveNewUser } from '../../services/userServices.js';
import bcrypt from 'bcrypt'



//saveUsers
export const saveUsersController = async (req, res) => {
    const createdUsers = await insertUsers();
    res.send({ createdUsers });
}


//login
export const loginController = async (req, res) => {
    const user = await getUser(req.body.email);

    if (user) {

        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({ message: 'Invalied User Email or Password' })
}
//register
export const registerController = async (req, res) => {

    const createdUsers = await saveNewUser(
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8)
    );
    res.send({
        _id: createdUsers._id,
        name: createdUsers.name,
        email: createdUsers.email,
        isAdmin: createdUsers.isAdmin,
        token: generateToken(createdUsers),
    })
}
