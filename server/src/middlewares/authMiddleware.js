const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes'); // Import StatusCodes

const authMiddleware = (req, res, next) => {
    // Ambil token dari header Authorization
    const token = req.header('Authorization');
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verifikasi token
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded; // Simpan data user ke dalam request
        next(); // Lanjutkan ke middleware berikutnya
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;