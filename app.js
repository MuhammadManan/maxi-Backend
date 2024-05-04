require("dotenv").config();
const PORT = process.env.PORT || 2000;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const app = express();

// parse the body of incoming request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));

// Routing to specific middleware and route
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Routing if url is not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views", "/404.html"));
});

// server is running
app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
