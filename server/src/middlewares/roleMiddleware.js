const { StatusCodes } = require('http-status-codes'); // Import StatusCodes

const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(StatusCodes.FORBIDDEN).json({
                message: 'Access denied. You do not have permission to perform this action.',
            });
        }
        next();
    };
};

module.exports = roleMiddleware;