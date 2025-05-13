const express = require('express');
const passport = require('passport');
const { registerJobseeker, loginJobseeker, googleOAuth } = require('../controllers/authController');
const { body } = require('express-validator');
const validateInput = require('../middlewares/validateInput');

const router = express.Router();

// Google OAuth Routes
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get(
//     '/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     googleOAuth
// );

// Register Jobseeker
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Email is invalid'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('name').notEmpty().withMessage('Name is required'),
    ],
    validateInput,
    registerJobseeker
);

// Login Jobseeker
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Email is invalid'),
        body('password').notEmpty().withMessage('Password is required'),
    ],
    validateInput,
    loginJobseeker
);

module.exports = router;

