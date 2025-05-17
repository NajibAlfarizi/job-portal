const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk userId
  companyName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);