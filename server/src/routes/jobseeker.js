const express = require('express');
const router = express.Router();
const jobseekerController = require('../controllers/jobseekerController');

// Route to create a new jobseeker profile
router.post('/', jobseekerController.createJobseeker);

// Route to get a jobseeker profile by user ID
router.get('/:userId', jobseekerController.getJobseekerProfile);

// Route to update a jobseeker profile by user ID
router.put('/:userId', jobseekerController.updateJobseekerProfile);

// // Route to delete a jobseeker profile by user ID
// router.delete('/:userId', jobseekerController);

module.exports = router;