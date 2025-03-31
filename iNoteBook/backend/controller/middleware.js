require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwt_sign = process.env.JWT_SECRETE;

const fetchUser = async (req,res,next)=>{
    try {
        const token = req.header('auth-token');
        if(!token) return res.status(400).json({meg:"token is invalid"})

        const data = jwt.verify(token,jwt_sign);
        req.user = data.user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({meg:"internal server error"});
    }
}

module.exports = {fetchUser};