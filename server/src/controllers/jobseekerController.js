const Jobseeker = require('../models/jobseeker');

// Create a new jobseeker profile
// exports.createJobseekerProfile = async (req, res) => {
//     try {
//         const { fullName, address, cv, skills, education, experience, currentPosition } = req.body;
//         const jobseeker = new Jobseeker({
//             userId: req.user._id, // Assuming user ID is available in req.user
//             fullName,
//             address,
//             cv,
//             skills,
//             education,
//             experience,
//             currentPosition
//         });

//         consosle.log('Jobseeker profile data:', jobseeker);

//         if(!jobseeker) {
//             return res.status(400).json({ message: 'Invalid jobseeker data' });
//         }
//         // Check if the user already has a jobseeker profile
//         const existingProfile = await Jobseeker.findOne({ userId: req.user._id });
//         if (existingProfile) {
//             return res.status(400).json({ message: 'Jobseeker profile already exists' });
//         }
//         // Save the new jobseeker profile
//         await jobseeker.validate();
//         console.log('Jobseeker profile data:', jobseeker);
//         await jobseeker.save();
//         res.status(201).json({ message: 'Jobseeker profile created successfully', jobseeker });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating jobseeker profile', error });
//     }
// };

// Get jobseeker profile by user ID
exports.getJobseekerProfile = async (req, res) => {
    try {
        const jobseeker = await Jobseeker.findOne({ userId: req.user._id });
        if (!jobseeker) {
            return res.status(404).json({ message: 'Jobseeker profile not found' });
        }
        res.status(200).json(jobseeker);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving jobseeker profile', error });
    }
};

// Update jobseeker profile
exports.updateJobseekerProfile = async (req, res) => {
    try {
        const { fullName, address, cv, skills, education, experience, currentPosition } = req.body;
        const jobseeker = await Jobseeker.findOneAndUpdate(
            { userId: req.user._id },
            { fullName, address, cv, skills, education, experience, currentPosition },
            { new: true }
        );
        if (!jobseeker) {
            return res.status(404).json({ message: 'Jobseeker profile not found' });
        }
        res.status(200).json({ message: 'Jobseeker profile updated successfully', jobseeker });
    } catch (error) {
        res.status(500).json({ message: 'Error updating jobseeker profile', error });
    }
};

// Create a new jobseeker (alternative method)
exports.createJobseeker = async (req, res) => {
    try {
        console.log("Data diterima dari frontend:", req.body);
        const { userId, fullName } = req.body;

        if (!userId || !fullName) {
            return res.status(400).json({ error: "userId dan fullName wajib diisi" });
        }

        const jobseeker = new Jobseeker({ userId, fullName });
        await jobseeker.save();
        res.status(201).json(jobseeker);
    } catch (err) {
        console.error("Error saat menyimpan jobseeker:", err);
        res.status(500).json({ error: err.message });
    }
};
