const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'profilePicture') {
            cb(null, 'uploads/profile-pictures/'); // Folder di luar src
        } else if (file.fieldname === 'cv') {
            cb(null, 'uploads/cvs/'); // Folder di luar src
        } else {
            cb(new Error('Invalid field name'), false);
        }
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueSuffix);
    },
});

// Filter file berdasarkan jenis
const fileFilter = (req, file, cb) => {
    if (file.fieldname === 'profilePicture') {
        // Hanya izinkan file gambar
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed for profile pictures'), false);
        }
    } else if (file.fieldname === 'cv') {
        // Hanya izinkan file PDF
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Only PDF files are allowed for CVs'), false);
        }
    }
    cb(null, true);
};

// Inisialisasi multer
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // Maksimal 5MB
    },
});

module.exports = upload;