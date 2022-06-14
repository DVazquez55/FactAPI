const jwt = require("jsonwebtoken");
const config = require('../config/config');
const controller = {};


//functions
controller.signin = async (req, res) => {

    const token = jwt.sign({ id:"123456789" }, config.Secret, { expiresIn: 3600 });

    res.status(200).json({token});
}

module.exports = controller;