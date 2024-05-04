require("dotenv").config();
const PORT = process.env.PORT || 2000;
const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

server.on("error", (err) => {
  console.log(err.message);
});
server.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
