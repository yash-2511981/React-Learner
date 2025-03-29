const {body} = require("express-validator");


const registerValidationRules = [
    body('name').notEmpty().withMessage("name should not be empty"),
    body('email').isEmail().withMessage("email should be email type and should not be empty"),
    body('password').isLength({min:6}).withMessage("password should be at least 6 charaters")
];

module.exports = {registerValidationRules};