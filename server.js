const app = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");
const mongoose = require("mongoose");

const normalizePort = (val) => {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") throw error;

  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${port}`;

  switch (error.code) {
    case "EACCS":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EACCRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {

  try {

    const addr = server.address();
    console.log(addr)
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${port}`;

    // Connect to DB
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB")
    })
    .catch(err => new Error(err));

    debug(`Listening on ${bind}`);
    console.log(`Listening on ${bind}`);

  } catch(e) {

  }


};

const port = normalizePort(process.env.BACKEND_PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

server.listen(port);
