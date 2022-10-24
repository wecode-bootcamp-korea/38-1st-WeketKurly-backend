const express = require("express");
const router = express.Router();

const cartsRouter = require('./cartsRouter');
const usersRouter = require("./usersRouter");

router.use("/users", usersRouter);
router.use("/carts", cartsRouter);

const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/products", productsRouter.router);
router.use("/banner", bannerRouter.router);


module.exports = router;
