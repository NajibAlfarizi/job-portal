const logger = require('./logger'); // Menggunakan Winston untuk mencatat error

const errorHandler = (err, req, res, next) => {
    // Log error menggunakan Winston
    logger.error(`Error: ${err.message}`);

    // Kirim respons error ke client
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;