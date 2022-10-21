const productsDao = require("../model/productsDao");

const getProducts = async () => {
  return await productsDao.getProducts();
};

const getMdProducts = async (categoriesId) => {
  return await productsDao.categoriesProducts(categoriesId);
};

module.exports = { getProducts, getMdProducts };
