const categoriesDao = require("../model/categoriesDao");

const getMainCategoriesAllProducts = async (maincategoriesId, sorttype) => {
  let sort = ``;

  if (sorttype == 1) {
    sort = ``;
  } else if (sorttype == 2) {
    sort = `ORDER BY productPrice DESC`;
  } else if (sorttype == 3) {
    sort = `ORDER BY productPrice`;
  } else if (!sorttype) {
    sort = ``;
  }

  return await categoriesDao.getMainCategoriesAllProducts(
    maincategoriesId,
    sort
  );
};

const getSubCategoriesAllProducts = async (subcategoriesId, sorttype) => {
  let sort = ``;

  if (sorttype == 1) {
    sort = ``;
  } else if (sorttype == 2) {
    sort = `ORDER BY productPrice DESC`;
  } else if (sorttype == 3) {
    sort = `ORDER BY productPrice`;
  } else if (!sorttype) {
    sort = ``;
  }

  return await categoriesDao.getSubCategoriesAllProducts(subcategoriesId, sort);
};

module.exports = { getMainCategoriesAllProducts, getSubCategoriesAllProducts };
