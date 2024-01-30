const jwt = require("jsonwebtoken");

const generateToken = () => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });

}

modules.exports = { generateToken };