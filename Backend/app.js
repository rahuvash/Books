const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'config', '.env') });
const express = require('express');
const cors = require('cors');  
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
