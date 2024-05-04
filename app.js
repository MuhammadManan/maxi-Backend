require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
