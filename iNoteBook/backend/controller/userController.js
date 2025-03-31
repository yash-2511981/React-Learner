const User = require('../Models/userModel');
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwt_sign = process.env.JWT_SECRETE;


//user registration 
const register = async (req, res) => {
    try {
        //custom validation
        const error = await validationResult(req);

        //checking error
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        //getting data
        const { name, email, password } = req.body

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        //verifying user is already exist
        const getUser = await User.findOne({ email });

        if (getUser) return res.json({ message: "user is already exist with this email" });

        //inserting user
        const user = await User.create({ name, email, password: hashPass });

        //generating and sending autorization token to the user
        const data = {
            user: { id: user._id }
        }
        const token = jwt.sign(data, jwt_sign,{expiresIn:"2h"});
        res.json({ token })

    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}


//user login
const login = async (req,res) => {
    try {
        //verifying validation
        const error = await validationResult(req);

        //checking validationError
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        const { email, password } = req.body

        //getting user from database
        const user = await User.findOne({ email });

        //if user not available
        if (!user) return res.json({ message: "Invalid creadentials" });

        //verify password
        const verifyPass = await bcrypt.compare(password, user.password);

        //if password is incorrect
        if (!verifyPass) return res.json({ message: "Invalid creadentials" });

        //generating and sending autorization token to the user
        const data = {
            user: { id: user._id }
        }
        const token = jwt.sign(data, jwt_sign,{expiresIn:"2h"});
        res.json({ token })
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

//getting user info 
const getUser = async (req,res) => {
    try {
        const id = req.user.id;
        const user = await User.findById(id);
        res.json({user});
    }catch(error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

module.exports = { register, login,getUser};