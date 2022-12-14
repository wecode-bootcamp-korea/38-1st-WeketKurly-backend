const express = require("express");
const productsController = require("../controller/productsController");

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/main/specialprice", productsController.getSpecialPriceProducts);
router.get("/recommend", productsController.getProducts);
router.get("/md/:categoriesId", productsController.getMdProducts);
router.get("/categories", productsController.getAllProducts);

module.exports = { router };
