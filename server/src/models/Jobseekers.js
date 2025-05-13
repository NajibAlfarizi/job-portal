const mongoose = require('mongoose');

const jobseekerSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nama wajib saat registrasi
    email: { type: String, required: true, unique: true }, // Email wajib saat registrasi
    password: { type: String, required: true }, // Password wajib saat registrasi
    phone: { type: String, required: false }, // Opsional
    address: { type: String, required: false }, // Opsional
    skills: { type: [String], required: false }, // Opsional
    experience: { type: String, required: false }, // Opsional
    education: { type: String, required: false }, // Opsional
    googleId: { type: String, required: false }, // Opsional untuk Google OAuth
    profilePicture: { type: String, required: false }, // Opsional
    cv: { type: String, required: false }, // Opsional
    role: { type: String, default: 'jobseeker' }, // Default role
}, { timestamps: true });

module.exports = mongoose.model('Jobseeker', jobseekerSchema);