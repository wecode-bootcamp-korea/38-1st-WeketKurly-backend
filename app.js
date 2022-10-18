require("dotenv").config();

const http = require("http");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router");

const app = express();
const server = http.createServer(app);
const myDataSource = require("./util/dataSource");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);

app.get("/ping", (req, res, next) => {
  res.json({ message: "pong" });
});

server.listen(PORT, () => {
  console.log(`server open with port ${PORT}`);
  myDataSource
    .initialize()
    .then(() => {
      console.log("dataSource has been init");
    })
    .catch(() => {
      console.log("dataSource init failed");
    });
});
