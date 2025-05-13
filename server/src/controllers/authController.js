const bcrypt = require('bcryptjs');
const Jobseeker = require('../models/Jobseekers');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const registerJobseeker = async (req, res) => {
    const { name, email, password } = req.body;

    // Check if the user already exists
    try{
        const existingUser = await Jobseeker.findOne({ email });
        if (existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'User already exists',
            });
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new jobseeker
        const jobseeker = new Jobseeker({
            name,
            email,
            password: hashedPassword,
        });

        await jobseeker.save();

        return res.status(StatusCodes.CREATED).json({
            message: 'Jobseeker registered successfully',
            jobseeker: {
                id: jobseeker._id,
                name: jobseeker.name,
                email: jobseeker.email,
            },
        });
    } catch (error) {
        console.error('Error registering jobseeker:', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Error registering jobseeker',
        });
    }
}

// Login jobseeker
const loginJobseeker = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const jobseeker = await Jobseeker.findOne({ email });
        if (!jobseeker) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'Invalid credentials',
            });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, jobseeker.password);
        if (!isMatch) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'invalid credentials',
            });
        }

        // Generate JWT token
        const token = jwt.sign({ id: jobseeker._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return res.status(StatusCodes.OK).json({
            message: 'Jobseeker logged in successfully',
            token,
            jobseeker: {
                id: jobseeker._id,
                name: jobseeker.name,
                email: jobseeker.email,
            },
        });
    } catch (error) {
        console.error('Error logging in jobseeker:', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Error logging in jobseeker',
        });
    }
}

// const googleOAuth = async (req, res) => {
//     try {
//         // Data pengguna dari Passport.js
//         const jobseeker = req.user;

//         // Generate JWT token
//         const token = jwt.sign({ id: jobseeker._id, role: jobseeker.role }, process.env.JWT_SECRET, {
//             expiresIn: '1h',
//         });

//         return res.status(StatusCodes.OK).json({
//             message: 'Login/Register with Google successful',
//             token,
//             jobseeker: {
//                 id: jobseeker._id,
//                 name: jobseeker.name,
//                 email: jobseeker.email,
//                 profilePicture: jobseeker.profilePicture,
//             },
//         });
//     } catch (error) {
//         console.error('Error with Google OAuth:', error);
//         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
//             message: 'Error with Google OAuth',
//         });
//     }
// };

module.exports = {
    registerJobseeker,
    loginJobseeker,
    // googleOAuth
}