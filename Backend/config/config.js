module.exports = {
    server: {
        port: process.env.PORT || 3000 // Default port
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        // Add more database configurations as needed...
    }
};
