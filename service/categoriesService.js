const categoriesDao = require("../model/categoriesDao");

const getCategoriesName = async () => {
  const mainCategories = await categoriesDao.getCategoriesName();

  for (let i = 0; i < mainCategories.length; i++) {
    const subCategories = await categoriesDao.getSubCategoriesName(i + 1);
    mainCategories[i].subCategories = subCategories;
  }

  return mainCategories;
};

module.exports = { getCategoriesName };
