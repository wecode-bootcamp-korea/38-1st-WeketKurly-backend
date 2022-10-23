const express = require("express");
const productsController = require("../controller/productsController");

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/:categoriesId", productsController.getMdProducts);
router.get("/main/specialprice", productsController.getSpecialPriceProducts);

module.exports = { router };
