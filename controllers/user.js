const mongoose = require("mongoose");
const getToeken = require("../config/getToeken.js");
const sendEmail = require("../config/sendEmail.js");
const User = require("../models/userSchema.js");
const Image = require("../models/imageSchema.js");
const multer = require("multer");
const path = require("path");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, age, city } = req.body;

  try {
    if (!firstName || !lastName || !email || !password) {
      res.status(400);
      throw "Please Enter all the Feilds";
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw "User already exists";
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      age,
      city,
    });

    if (user) {
      sendEmail(user.email);
      res.status(200).json({
        token: getToeken(user._id),
      });
    } else {
      res.status(400);
      throw "User not found";
    }
  } catch (Error) {
    res.send(Error);
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400);
      throw "please fill all the fields completely";
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      if (userExists.password !== password) {
        res.status(400);
        throw "password is invalid";
      }
      res.status(200);
      res.send({ token: getToeken(userExists._id) });
    } else {
      res.status(400);
      throw "user not found";
    }
  } catch (Error) {
    res.send(Error);
  }
};
//upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("image");

const uploadImage = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
    } else {
      const image = await Image.create({
        name: req.file.filename,
      });
      if (image) {
        res.status(200);
        res.send({ message: "Success", image_id: image._id });
      } else {
        res.status(400);
        res.send({ message: "error occured" });
      }
    }
  });
};
const getImage = async (req, res) => {
  try {
    const image_id = req.params.id;
    const image = await Image.findById(image_id);
    if (image) {
      const reqPath = path.join(__dirname, "../", "/Images/");
      res.sendFile(reqPath + image.name);
    } else {
      throw "error in opening file";
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerUser, loginUser, uploadImage, getImage };
