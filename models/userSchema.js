const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: "String", required: true },
  lastName: { type: "String", required: true },
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  age: { type: "Number" },
  city: { type: "String" },
});

const user = mongoose.model("userSchema", userSchema);
module.exports = user;
