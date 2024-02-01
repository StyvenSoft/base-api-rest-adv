const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // Create a new User
        const newUser = await User.create(req.body);
        res.json(newUser)
    } else {
        throw new Error("User already exists");
    }
});

const loginUserController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?.id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?.id),
        })
    } else {
        throw new Error("Invalid Credentials");
    }
})

const getAllUser = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

const getUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
    } catch (error) {
        throw new Error(error)
    }
})

module.exports = { createUser, loginUserController, getAllUser, getUser };