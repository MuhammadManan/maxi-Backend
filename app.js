require("dotenv").config();
const PORT = process.env.PORT;
const http = require("http");
console.log(PORT);

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit();
});

server.on("error", (err) => {
  console.log(err.message);
});
server.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
});
