const express = require("express");
const upload = require("multer")();

const { postController } = require("../controllers");

const router = express.Router();

router.post("", upload.single("image"), postController.createPost);

module.exports = router;
