const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path.js");
const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
  console.log("Shop: ", adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
