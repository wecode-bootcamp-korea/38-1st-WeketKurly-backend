const productsService = require("../service/productsService");
const { catchAsync } = require("../util/error");

const getProducts = catchAsync(async (req, res, next) => {
  const product = await productsService.getProducts();

  return res.json({ item: product });
});

const getMdProducts = catchAsync(async (req, res, next) => {
  const { categoriesId } = req.params;

  if (!categoriesId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const data = await productsService.getMdProducts(categoriesId);

  return res.json({ item: data });
});

const getSpecialPriceProducts = catchAsync(async (req, res, next) => {
  const data = await productsService.getSpecialPriceProducts();

  return res.json({ item: data });
});

const getAllProducts = catchAsync(async (req, res, next) => {
  const { maincategoriesId, subcategoriesId, sorttype } = req.query;

  const data = await productsService.getAllProducts(
    maincategoriesId,
    subcategoriesId,
    sorttype
  );

  return res.json({ item: data });
});

module.exports = {
  getProducts,
  getMdProducts,
  getSpecialPriceProducts,
  getAllProducts,
};
