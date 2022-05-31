// Importing Necessary Modules
const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/connectDB");
connectDB();

// Invoking Parser's Functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json("content-type", "application/json"));

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    data: "dataToSendOnDesktop",
  });
});

app.post("/user", (req, res) => {
  res.status(200).json({
    success: true,
    data: "POST data",
  });
});

// Starting the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started Listen on ${PORT}`);
});
