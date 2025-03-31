const { body } = require("express-validator");


const registerValidationRules = [
    body('name').notEmpty().withMessage("name should not be empty"),
    body('email').isEmail().withMessage("enter proper email field should not be empty"),
    body('password').isLength({ min: 6 }).withMessage("password should be at least 6 charaters")
];

const loginValidationRules = [
    body('email').isEmail().withMessage("invalid creadentials"),
    body('password').notEmpty().withMessage("invalid creadentials")
]

const notesValidationRules = [
    body('title').notEmpty().withMessage("title needed"),
    body('content').custom(value => {
        if(typeof value === "string" && value.trim() !== ""){
            return true;
        }else if(Array.isArray(value) && value.length > 0 && value.every(item => typeof item === "string" && item.trim() !== "")){
            return true;
        }
        throw new Error("put a valid content");
    })
]
module.exports = { registerValidationRules, loginValidationRules, notesValidationRules };