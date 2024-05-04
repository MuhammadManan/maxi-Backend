const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path.js");
const adminData = require("./admin.js");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
});

module.exports = router;
