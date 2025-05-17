const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Clerk userId
  name: { type: String, required: true },
  role: { type: String, enum: ['jobseeker', 'company'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);