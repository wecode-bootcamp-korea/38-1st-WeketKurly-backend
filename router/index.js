const express = require("express");
const router = express.Router();

const cartsRouter = require('./cartsRouter');
const usersRouter = require("./usersRouter");

router.use("/users", usersRouter);
router.use("/carts", cartsRouter);

module.exports = router;
