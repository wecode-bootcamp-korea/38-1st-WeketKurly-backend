const myDataSource = require("../util/dataSource");

const getProducts = async () => {
  return await myDataSource.query(`
  SELECT
    p.name AS productName,
    p.thumnail_image_url AS thumbnailImageUrl,
    p.short_description AS shortDescription,
    p.price AS price
  FROM products AS p
  ORDER BY RAND()
  LIMIT 12;
  `);
};

const categoriesProducts = async (categoriesId) => {
  return await myDataSource.query(`
  SELECT
    p.name AS productName,
    p.thumnail_image_url AS thumbnailImageUrl,
    p.short_description AS shortDescription,
    p.price AS price
  FROM products AS p
  INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
  INNER JOIN categories c ON sc.category_id = c.id
  WHERE c.id = ${categoriesId}
  LIMIT 12
  OFFSET 0
  `);
};

const getCategoriesAllProducts = async (categoriesId, sort) => {
  return await myDataSource.query(`
    SELECT 
      p.name AS productName,
      p.thumnail_image_url AS thumbnailImageUrl,
      p.short_description AS shortDescription,
      p.price AS price
    FROM products AS p
    INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
    INNER JOIN categories c ON sc.category_id = c.id
    ${sort}
    ${categoriesId}
    `);
};

module.exports = {
  getProducts,
  categoriesProducts,
  getCategoriesAllProducts,
};
