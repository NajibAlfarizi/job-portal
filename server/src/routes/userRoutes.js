const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/fileUpload'); // Middleware untuk upload file
const { getProfile, updateProfile, deleteAccount } = require('../controllers/userController');

const router = express.Router();

// Mendapatkan profil pengguna
router.get('/profile', authMiddleware, getProfile);

// Memperbarui profil pengguna (termasuk upload foto profil)
router.put('/profile', authMiddleware, upload.single('profilePicture'), updateProfile);

// Hapus akun pengguna
router.delete('/account', authMiddleware, deleteAccount);

module.exports = router;