const productsDao = require("../model/productsDao");

const getProducts = async () => {
  return await productsDao.getProducts();
};

module.exports = { getProducts };
