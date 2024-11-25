const multer = require('multer');
const path = require('path');

// Configure multer to store files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads')); // Use absolute path to avoid issues
  },
  filename: (req, file, cb) => {
    //cb(null, file.originalname); // Keep the original file name
    cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
