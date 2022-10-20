const productsDao = require("../model/productsDao");

const getProducts = async () => {
  return await productsDao.getProducts();
};

const getMdProducts = async (categoriesId) => {
  return await productsDao.categoriesProducts(categoriesId);
};

const getBigBanners = async () => {
  return await productsDao.responseBigBanner();
};

const getSmallBanners = async () => {
  return await productsDao.responseSmallBanner();
};

module.exports = { getProducts, getMdProducts, getBigBanners, getSmallBanners };
