const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

router.get('/', exampleController.getExample);
// Define more routes as needed...

module.exports = router;
