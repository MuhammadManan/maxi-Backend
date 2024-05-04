require("dotenv").config();
const PORT = process.env.PORT || 2000;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const app = express();

// express got the template engine and also view(find the pug pages)
app.set("view engine", "pug");
app.set("views", "views");

// parse the body of incoming request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routing to specific middleware and route
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// Routing if url is not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views", "/404.html"));
});

// server is running
app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
