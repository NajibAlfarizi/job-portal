const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nama perusahaan
    email: { type: String, required: true, unique: true }, // Email perusahaan
    password: { type: String, required: true }, // Password perusahaan
    phone: { type: String, required: false }, // Nomor telepon perusahaan
    address: { type: String, required: false }, // Alamat perusahaan
    website: { type: String, required: false }, // Website perusahaan
    description: { type: String, required: false }, // Deskripsi perusahaan
    logo: { type: String, required: false }, // Path ke logo perusahaan
    verified: { type: Boolean, default: false }, // Status verifikasi perusahaan
    role: { type: String, default: 'company' }, // Role default adalah 'company'
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);