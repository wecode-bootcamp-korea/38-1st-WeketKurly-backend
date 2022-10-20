const productsService = require("../service/productsService");

const getProducts = async (req, res, next) => {
  const data = await productsService.getProducts();
  return res.json({ productCarousel: data });
};

module.exports = { getProducts };
