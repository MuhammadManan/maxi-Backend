require("dotenv").config();
const PORT = process.env.PORT;
const http = require("http");
const routes = require("./routes.js");

const server = http.createServer(routes);

server.on("error", (err) => {
  console.log(err.message);
});
server.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
