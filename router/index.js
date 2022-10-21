const express = require("express");
const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouter");

const router = express.Router();

router.use("/users", usersRouter.router);
router.use("/categories", categoriesRouter.router);

module.exports = router;
