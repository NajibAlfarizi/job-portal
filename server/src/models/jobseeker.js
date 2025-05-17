const mongoose = require('mongoose');

const jobseekerSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk userId
  fullName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Jobseeker', jobseekerSchema);