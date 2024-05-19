require('dotenv').config();
const express = require('express');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();

// Middleware
app.use(express.json());
// Add more middleware as needed...

// Routes
app.use('/api/example', exampleRoutes);
// Add more routes as needed...

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
