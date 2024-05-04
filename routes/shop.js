const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Welcom to default Route!</h1>");
});

module.exports = router;
