const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const requestLogger = require('./middlewares/requestLogger');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const passport = require('passport');
require('./config/passport'); // Import konfigurasi Passport

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(requestLogger); // Log every request
app.use(passport.initialize()); // Initialize Passport

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Gunakan route autentikasi
app.use('/api/user', userRoutes); // Tambahkan routes

// Root endpoint
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

// Use custom error handler
app.use(errorHandler); // Use the custom error handler

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`); // Info level for server start
});