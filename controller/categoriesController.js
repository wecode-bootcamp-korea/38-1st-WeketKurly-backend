const categoriesService = require("../service/categoriesService");

const getCategoriesName = async (req, res, next) => {
  const categories = await categoriesService.getCategoriesName();
  const subCategories = await categoriesService.getSubCategoriesName();
  return res
    .status(200)
    .json({ categoriesData: categories, subCategoriesData: subCategories });
};

module.exports = { getCategoriesName };
