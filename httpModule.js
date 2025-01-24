const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      msg: "Hello World",
    })
  );
  res.end(); // This will complete the response no more response can be sent after that
  // process.exit(); // Used to exit from the server, here the server will exit after an request comes in
});

server.listen(3000, "localhost");
