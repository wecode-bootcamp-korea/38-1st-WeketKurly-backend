const productsDao = require("../model/productsDao");

const getProducts = async () => {
  return await productsDao.getProducts();
};

const getMdProducts = async (categoriesId) => {
  return await productsDao.categoriesProducts(categoriesId);
};

const getSpecialPriceProducts = async () => {
  return await productsDao.getSpecialPriceProducts();
};

module.exports = { getProducts, getMdProducts, getSpecialPriceProducts };
