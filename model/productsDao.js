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
  LIMIT 10;
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
  LIMIT 6
  OFFSET 0
  `);
};

module.exports = {
  getProducts,
  categoriesProducts,
};
