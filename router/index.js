const express = require("express");
const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/categories", productsRouter.router);
router.use("/banner", bannerRouter.router);

module.exports = router;
