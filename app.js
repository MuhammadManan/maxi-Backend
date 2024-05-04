require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const app = express();

// parse the body of incoming request
app.use(bodyParser.urlencoded({ extended: false }));

// Routing to specific middleware and route
app.use(adminRoutes);
app.use(shopRoutes);

// Routing if url is not found
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

// server is running
app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
