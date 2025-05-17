const Company = require('../models/company');

exports.createCompanyProfile = async (req, res) => {
    try {
        const { companyName, companyDescription, website, logo } = req.body;
        const userId = req.user.id; // Assuming user ID is available in req.user

        const newCompany = new Company({
            userId,
            companyName,
            companyDescription,
            website,
            logo
        });

        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (error) {
        res.status(500).json({ message: 'Error creating company profile', error });
    }
};

exports.getCompanyProfile = async (req, res) => {
    try {
        const company = await Company.findOne({ userId: req.user.id });
        if (!company) {
            return res.status(404).json({ message: 'Company profile not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving company profile', error });
    }
};

exports.updateCompanyProfile = async (req, res) => {
    try {
        const { companyName, companyDescription, website, logo } = req.body;
        const updatedCompany = await Company.findOneAndUpdate(
            { userId: req.user.id },
            { companyName, companyDescription, website, logo },
            { new: true }
        );

        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company profile not found' });
        }
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(500).json({ message: 'Error updating company profile', error });
    }
};