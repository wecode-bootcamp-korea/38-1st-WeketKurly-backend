const categoriesService = require("../service/categoriesService");

const getCategoriesName = async (req, res, next) => {
  const categories = await categoriesService.getCategoriesName();

  return res.status(200).json({ data: categories });
};

module.exports = { getCategoriesName };
