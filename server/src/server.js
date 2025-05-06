const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const requestLogger = require('./middlewares/requestLogger');
const logger = require('./middlewares/logger');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger); // Log every request

// Connect to MongoDB
connectDB();

// Routes (placeholder)
app.get('/', (req, res) => {
    logger.info('Root endpoint hit'); // Info level for general access
    res.send('API is running...');
});

// Handle 404 errors
app.use((req, res, next) => {
    logger.warn(`404 - Not Found - ${req.originalUrl}`); // Warn level for 404 errors
    res.status(404).send('Route not found');
});

// Handle server errors
app.use((err, req, res, next) => {
    logger.error(`500 - Server Error - ${err.message}`); // Error level for server errors
    res.status(500).send('Server error');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`); // Info level for server start
});