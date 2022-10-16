const path = require("path");
const multer = require("multer");

const UPLOAD_FOLD = "./uploads/"; // => Muloto ENV te thakbe

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLD);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const randomName =
      process.env.APP_NAME + "_" + Date.now() + Math.round(Math.random() * 1e9);
    const finalName = randomName + fileExt;
    req.avatarID = finalName;
    cb(null, finalName);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Something Went Wrong, Please try again later"));
    }
  },
});

module.exports = upload;
