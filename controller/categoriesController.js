const categoriesService = require("../service/categoriesService");
const { catchAsync } = require("../util/error");

const getCategories = catchAsync(async (req, res, next) => {
  const categories = await categoriesService.getCategories();

  return res.status(200).json({ data: categories });
});

module.exports = { getCategories };
