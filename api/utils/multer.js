import multer from "multer";

const storage = multer.memoryStorage();   // file RAM me aayegi

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

export default upload;
