const myDataSource = require("../util/dataSource");

const getCategoriesName = async () => {
  return await myDataSource.query(`
        SELECT * FROM categories
    `);
};

const getSubCategoriesName = async () => {
  return await myDataSource.query(`
        SELECT * FROM sub_categories
    `);
};

module.exports = { getCategoriesName, getSubCategoriesName };
