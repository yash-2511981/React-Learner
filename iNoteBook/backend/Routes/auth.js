const express = require("express");
const {register,login,getUser} = require("../controller/userController.js");
const {registerValidationRules,loginValidationRules} = require('../controller/validations.js');
const {fetchUser} = require("../controller/middleware.js");
const notesRouter = require("./notes.js");

const router = express.Router();

router.post("/register",registerValidationRules,register);
router.post("/login",loginValidationRules,login);

router.use("/user",fetchUser,notesRouter);

module.exports = router

/* 
routes

login - (POST) - localhost:2000/login
register - (POST) -localhost:2000/register

you can add the route to find the incoming jwt is valid or not

router.get("/getUser",fetchUser,getUser);

getUser -(GET) -localhost:2000/register

*/