const router = require("express").Router();

const categoriesController = require("../controller/categoriesController");

router.get(
  "/main/:maincategoriesId",
  categoriesController.getMainCategoriesAllProducts
);
router.get(
  "/sub/:subcategoriesId",
  categoriesController.getSubCategoriesAllProducts
);

module.exports = { router };
