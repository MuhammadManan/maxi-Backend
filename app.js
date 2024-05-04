require("dotenv").config();
const PORT = process.env.PORT || 2000;
const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // Allow the request to continue to the next middleware
});
app.use((req, res, next) => {
  console.log("In another middleware");
  res.write("<h1>Good morning Brother!</h1>");
});
const server = http.createServer(app);

server.on("error", (err) => {
  console.log(err.message);
});
server.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
