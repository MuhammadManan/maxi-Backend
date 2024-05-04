require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("It always run!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Route for Add Product!</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Welcom to default Route!</h1>");
});

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
