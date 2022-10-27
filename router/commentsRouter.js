const router = require("express").Router();

const commentsController = require("../controller/commentsController");
const { loginRequired } = require("../util/auth");

router.post("", loginRequired, commentsController.createComment);
router.get("/:productId", commentsController.searchComment);

module.exports = { router };
