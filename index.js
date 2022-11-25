const express = require("express");
const connectDb = require("./config/db.js");
const userRoute = require("./routes/userRoute.js");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();
connectDb();
app.use("/", userRoute);

app.listen(
  process.env.PORT,
  console.log(`server started on ${process.env.PORT}`)
);
