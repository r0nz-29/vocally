const WebSocket = require("ws");

const ws = new WebSocket("localhost:5000");

ws.on("open", () => {
  console.log("Connected to server");
});

ws.on("message", (message) => {
  console.log(`access-log: ${message}`);
});

ws.on("close", () => {
  console.log("Disconnected from server");
});

function log(req, res, next) {
  ws.send(req.route.path);
  next();
}

module.exports = log;