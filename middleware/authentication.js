const jwt = require("jsonwebtoken");
const User = require("../models/userSchema.js");

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        //decodes token id
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        res.status(401);
        res.send({ message: "Not authorized, token failed" });
      }
    } else {
      res.status(401);
      throw "Not authorized, no token";
    }
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { protect };
