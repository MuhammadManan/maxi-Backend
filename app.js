require("dotenv").config();
const PORT = process.env.PORT;
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(
    "URl: ",
    req.url,
    "\n Header: ",
    req.headers,
    "\n method: ",
    req.method
  );
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>MY first Page</title></head><body><h1>Hello from my Node.js Server!</h1></body></html>"
  );
  res.end();
});

server.on("error", (err) => {
  console.log(err.message);
});
server.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
});
