const usersModel = require("../models/usersModel");

const registerUser = async (user) => {
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

    const isSamePassword = dbUser.password ==  password;
    
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    return {status: "ok", user: {id: dbUser.id}};
}

module.exports = {registerUser, loginUser};



