const categoriesService = require("../service/categoriesService");

const getMainCategoriesAllProducts = async (req, res, next) => {
  const { maincategoriesId } = req.params;
  const getMainCategoriesAllProducts =
    await categoriesService.getMainCategoriesAllProducts(maincategoriesId);
  return res
    .status(200)
    .json({ getMainCategoriesAllProducts: getMainCategoriesAllProducts });
};

const getSubCategoriesAllProducts = async (req, res, next) => {
  const { subcategoriesId } = req.params;
  const getSubCategoriesAllProducts =
    await categoriesService.getSubCategoriesAllProducts(subcategoriesId);
  return res
    .status(200)
    .json({ getSubCategoriesAllProducts: getSubCategoriesAllProducts });
};

module.exports = { getMainCategoriesAllProducts, getSubCategoriesAllProducts };
