const productsDao = require("../model/productsDao");

const getProducts = async () => {
  return await productsDao.getProducts();
};

const getMdProducts = async (categoriesId) => {
  return await productsDao.categoriesProducts(categoriesId);
};

const getAllProducts = async (maincategoriesId, subcategoriesId, sorttype) => {
  let sort = ``;
  let categoriesId = ``;

  if (sorttype == 1) {
    sort = ``;
  } else if (sorttype == 2) {
    sort = `ORDER BY price DESC`;
  } else if (sorttype == 3) {
    sort = `ORDER BY price`;
  } else if (!sorttype) {
    sort = ``;
  }

  if (maincategoriesId) {
    categoriesId = `WHERE c.id = ${maincategoriesId}`;
  } else if (subcategoriesId) {
    categoriesId = `WHERE sc.id = ${subcategoriesId}`;
  }

  return await productsDao.getAllProducts(sort, whereCluse);
};

module.exports = { getProducts, getMdProducts, getAllProducts };
