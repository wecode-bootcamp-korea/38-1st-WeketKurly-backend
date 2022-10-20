const express = require("express");
const usersRouter = require("./usersRouter");
const detailRouter = require("./detailRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/products", detailRouter.router);

module.exports = router;
