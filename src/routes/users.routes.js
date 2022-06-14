const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authjwt');

//controller
const userController = require('../controllers/usersController');

//endpoints
router.get('/', auth.verifyToken ,userController.get);

module.exports = router;