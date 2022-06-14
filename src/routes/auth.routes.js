const express = require('express');
const router = express.Router();

//controller
const authController = require('../controllers/authController');

//endpoints
router.get('/signin', authController.signin);

module.exports = router;