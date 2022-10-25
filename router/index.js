const express = require("express");

const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouter");
const detailRouter = require("./detailRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");

const cartsRouter = require("./cartsRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/categories", categoriesRouter.router);
router.use("/detail", detailRouter.router);
router.use("/products", productsRouter.router);
router.use("/banner", bannerRouter.router);
router.use("/carts", cartsRouter);

module.exports = router;
