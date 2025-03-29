const User = require('../Models/userModel');
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {

    //custom validation
    const error = await validationResult(req);

    //checking error
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    //getting data
    const { name, email, password } = req.body
    const hashPass = await bcrypt.hash(password, 10);

    //inserting user
    await User.create({ name, email, password: hashPass }).then((result) => {
        res.json({
            messsage: "register successfully",
            res: result
        })
    }).catch((err) => {
        res.status(400).json({error:"email should be unique"})
    });
}

module.exports = { register };