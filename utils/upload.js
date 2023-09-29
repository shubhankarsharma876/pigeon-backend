import multer from "multer";
//For the easy handling of multipart/form data that is used when file uploading is done.

const upload = multer({dest: 'uploads' })
export default upload;