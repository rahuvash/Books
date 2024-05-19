// controllers/authController.js
const User = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        // console.log('User information:', { name, email, password });
        console.log(`User registere : ${name}`)
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
