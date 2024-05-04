require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // Allow the request to continue to the next middleware
});
app.use((req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Good morning Brother!</h1>");
});

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
