const detailDao = require("../model/detailDao");

const getProducts = async (productId) => {
  return await detailDao.getProducts(productId);
};

module.exports = { getProducts };
