const detailService = require("../service/detailService");
const { catchAsync } = require("../util/error");

const getProducts = catchAsync(async (req, res, next) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const data = await detailService.getProducts(productId);
  return res.json({ productData: data });
});

module.exports = { getProducts };
