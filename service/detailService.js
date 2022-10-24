const detailDao = require("../model/detailDao");

const getProduct = async (productId) => {
  return await detailDao.getProducts(productId);
};

module.exports = { getProduct };
