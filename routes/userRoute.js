const express = require("express");
const {
  registerUser,
  loginUser,
  uploadImage,
  getImage,
} = require("../controllers/user.js");
const { protect } = require("../middleware/authentication.js");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/upload").post(protect, uploadImage);
router.route("/:id").get(protect, getImage);

module.exports = router;
