const express = require("express");
const detailController = require("../controller/detailController");

const router = express.Router();

router.get("/:productId", detailController.getProducts);

module.exports = { router };
