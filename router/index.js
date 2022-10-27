const express = require("express");
const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const bannerRouter = require("./bannerRouter");
const commentsRouter = require("./commentsRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/products", productsRouter.router);
router.use("/banner", bannerRouter.router);
router.use("/comments", commentsRouter.router);

module.exports = router;
