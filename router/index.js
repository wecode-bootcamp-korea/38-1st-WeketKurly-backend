const express = require("express");

const usersRouter = require("./usersRouter");
const detailRouter = require("./detailRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");

const cartsRouter = require('./cartsRouter');
const likesRouter = require('./likesRouter');

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/detail", detailRouter.router);
router.use("/products", productsRouter.router);
router.use("/banner", bannerRouter.router);

router.use("/carts", cartsRouter);
router.use("/likes", likesRouter);

module.exports = router;
