// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, signin } = require('../controllers/authController');


// Routes

// Register Route
router.post('/register',register);

// Signin Route
router.post('/signin',signin)

module.exports = router;
