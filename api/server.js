const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");

const donutRouter = require("../donuts/donut-routes");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.use("/api/donuts", donutRouter);

module.exports = server;
