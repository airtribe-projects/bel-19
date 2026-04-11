const usersModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;
const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUND);
    const dbUser = await usersModel.create(user);
    return dbUser;
};

const loginUser = async (email, password) => {
    
    const body = {
        email: email
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }
    // Hashes may not be same for the same string
    // const isSamePassword = dbUser.password ==  bcrypt.hashSync(password, SALT_ROUND);
    const isSamePassword = bcrypt.compareSync(password, dbUser.password);
    

    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    const token = jwt.sign({id:dbUser.id, role:dbUser.role}, JWT_KEY, {expiresIn: '1h'});
    
    return {status: "ok", token};
}

module.exports = {registerUser, loginUser};



