const {body} = require("express-validator");


const registerValidationRules = [
    body('name').notEmpty().withMessage("name should not be empty"),
    body('email').isEmail().withMessage("enter proper email field should not be empty"),
    body('password').isLength({min:6}).withMessage("password should be at least 6 charaters")
];

const loginValidationRules = [
    body('email').isEmail().withMessage("invalid creadentials"),
    body('password').notEmpty().withMessage("invalid creadentials")
]

const notesValidationRules =[
    body('title').isEmpty().withMessage("title needed"),
    body('content').isEmpty().withMessage("put a some content in it")
]
module.exports = {registerValidationRules,loginValidationRules,notesValidationRules};