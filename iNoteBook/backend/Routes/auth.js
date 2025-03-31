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