const categoriesDao = require("../model/categoriesDao");

const getMainCategoriesAllProducts = async (maincategoriesId) => {
  return await categoriesDao.getMainCategoriesAllProducts(maincategoriesId);
};

const getSubCategoriesAllProducts = async (subcategoriesId) => {
  return await categoriesDao.getSubCategoriesAllProducts(subcategoriesId);
};

module.exports = { getMainCategoriesAllProducts, getSubCategoriesAllProducts };
