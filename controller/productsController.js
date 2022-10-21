const productsService = require("../service/productsService");

const getProducts = async (req, res, next) => {
  const product = await productsService.getProducts();

  return res.json({ product: product });
};

const getMdProducts = async (req, res, next) => {
  const { categoriesId } = req.params;

  if (!categoriesId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const data = await productsService.getMdProducts(categoriesId);

  return res.json({ mdRecommand: data });
};

module.exports = { getProducts, getMdProducts };
