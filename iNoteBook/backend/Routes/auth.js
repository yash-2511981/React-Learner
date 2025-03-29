const express = require("express");
const {register} = require("../controller/userController.js");
const {registerValidationRules} = require('../controller/validations.js');


const router = express.Router();

router.post("/register",registerValidationRules,register);

module.exports = router