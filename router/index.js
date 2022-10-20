const express = require("express");
const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/main", productsRouter.router);

module.exports = router;
