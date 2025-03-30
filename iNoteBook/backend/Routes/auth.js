const express = require("express");
const {register,login} = require("../controller/userController.js");
const {registerValidationRules,loginValidationRules} = require('../controller/validations.js');


const router = express.Router();

router.post("/register",registerValidationRules,register);
router.post("/login",loginValidationRules,login);

module.exports = router