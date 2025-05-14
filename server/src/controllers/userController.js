const Jobseeker = require('../models/Jobseekers');
const Company = require('../models/Company');
const { StatusCodes } = require('http-status-codes');

// Mendapatkan profil pengguna (jobseeker atau company)
const getProfile = async (req, res) => {
    try {
        let user;

        if (req.user.role === 'jobseeker') {
            user = await Jobseeker.findById(req.user.id);
        } else if (req.user.role === 'company') {
            user = await Company.findById(req.user.id);
        }

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
        }

        res.status(StatusCodes.OK).json({ user });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    }
};

// Memperbarui profil pengguna (jobseeker atau company)
const updateProfile = async (req, res) => {
    const { phone, address, skills, experience, education, description, website } = req.body;

    try {
        let user;

        if (req.user.role === 'jobseeker') {
            user = await Jobseeker.findById(req.user.id);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Jobseeker not found' });
            }

            // Update data jobseeker
            user.phone = phone || user.phone;
            user.address = address || user.address;
            user.skills = skills || user.skills;
            user.experience = experience || user.experience;
            user.education = education || user.education;
        } else if (req.user.role === 'company') {
            user = await Company.findById(req.user.id);
            if (!user) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Company not found' });
            }

            // Update data company
            user.phone = phone || user.phone;
            user.address = address || user.address;
            user.description = description || user.description;
            user.website = website || user.website;
        }

        if (req.file) {
            user.profilePicture = req.file.path; // Simpan path foto profil
        }

        await user.save();

        res.status(StatusCodes.OK).json({ message: 'Profile updated successfully', user });
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    }
};

// Hapus akun pengguna (jobseeker atau company)
const deleteAccount = async (req, res) => {
    try {
        let user;

        if (req.user.role === 'jobseeker') {
            user = await Jobseeker.findByIdAndDelete(req.user.id);
        } else if (req.user.role === 'company') {
            user = await Company.findByIdAndDelete(req.user.id);
        }

        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
        }

        res.status(StatusCodes.OK).json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error('Error deleting account:', error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
    }
};

module.exports = {
    getProfile,
    updateProfile,
    deleteAccount,
};