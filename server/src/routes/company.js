const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

// Route to create a new company profile
router.post('/', CompanyController.createCompanyProfile);

// Route to get a company profile by user ID
router.get('/:userId', CompanyController.getCompanyProfile);

// Route to update a company profile by user ID
router.put('/:userId', CompanyController.updateCompanyProfile);

// Route to delete a company profile by user ID
// router.delete('/:userId', CompanyController.deleteCompany);

module.exports = router;