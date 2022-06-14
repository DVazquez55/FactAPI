const config = require('../config/config');
const jwt = require('jsonwebtoken');
const auth = {};

auth.verifyToken = async (req, res, next) =>{

    const token = req.headers['x-access-token'];

    if(!token) return res.status(403).json({message: 'access not authorized!'});

    const tokenDecoded = jwt.verify(token, config.Secret);

    //search user with the id in tokenDecoded

    next();
};

module.exports = auth;