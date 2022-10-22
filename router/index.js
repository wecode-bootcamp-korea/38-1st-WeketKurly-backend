const express = require("express");
const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");
const categoriesRouter = require("./categoriesRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/products", productsRouter.router);
router.use("/banner", bannerRouter.router);
router.use("/categories", categoriesRouter.router);

module.exports = router;
