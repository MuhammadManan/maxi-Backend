require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Send</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
app.use("/", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Welcom to default Route!</h1>");
});

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
