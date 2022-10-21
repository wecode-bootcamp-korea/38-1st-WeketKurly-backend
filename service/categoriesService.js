const categoriesDao = require("../model/categoriesDao");

const getCategoriesName = async () => {
  return await categoriesDao.getCategoriesName();
};

const getSubCategoriesName = async () => {
  return await categoriesDao.getSubCategoriesName();
};

module.exports = { getCategoriesName, getSubCategoriesName };
