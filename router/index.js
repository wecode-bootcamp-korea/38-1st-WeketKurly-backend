const express = require("express");
const usersRouter = require("./usersRouter");

const router = express.Router();

router.use("/users", usersRouter.router);

module.exports = router;
