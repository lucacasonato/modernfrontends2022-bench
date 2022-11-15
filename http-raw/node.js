const http = require("http");

const server = http.createServer((_req, res) => {
  res.end("Hello World");
});

server.listen(8000, "localhost", (e) => {
  console.log(`Server running at http://localhost:8000/`);
});
