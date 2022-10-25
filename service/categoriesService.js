const categoriesDao = require("../model/categoriesDao");

const getCategories = async () => {
  return categoriesDao.getCategories();
};

module.exports = { getCategories };
