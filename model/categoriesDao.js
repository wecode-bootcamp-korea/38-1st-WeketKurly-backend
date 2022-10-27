const myDataSource = require("../util/dataSource");

const getCategories = async () => {
  return await myDataSource.query(`
  SELECT c.id AS mainCategoriesId, c.name AS mainCategoriesName,
    JSON_ARRAYAGG(
      JSON_OBJECT(
        "subCategoriesId", sc.id,
        "subCategoriesName", sc.name)
    ) AS subCategories
  FROM categories AS c
  LEFT JOIN sub_categories AS sc ON sc.category_id = c.id
  GROUP BY c.id`);
};

module.exports = { getCategories };
