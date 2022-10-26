const myDataSource = require("../util/dataSource");

const getProducts = async () => {
  return await myDataSource.query(`
  SELECT
    p.id AS productId,
    p.name AS productName,
    p.thumnail_image_url AS thumbnailImageUrl,
    p.price AS price
  FROM products AS p
  ORDER BY RAND()
  LIMIT 8;
  `);
};

const categoriesProducts = async (categoriesId) => {
  return await myDataSource.query(`
  SELECT
    p.id AS productId,
    p.name AS productName,
    p.thumnail_image_url AS thumbnailImageUrl,
    p.price AS price
  FROM products AS p
  INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
  INNER JOIN categories c ON sc.category_id = c.id
  WHERE c.id = ${categoriesId}
  LIMIT 8
  OFFSET 0
  `);
};

const getSpecialPriceProducts = async () => {
  return await myDataSource.query(`
    SELECT 
      p.id AS productId,
      sp.discount AS discount,
      p.name AS productName,
      p.short_description AS shortDescription,
      p.price AS price,
      p.thumnail_image_url AS thumbnailImageUrl
    FROM special_price AS sp
    INNER JOIN products AS p ON sp.products_id = p.id
  `);
};

const getAllProducts = async (whereClause, sort) => {
  return await myDataSource.query(`
    SELECT
      p.id AS productId,
      p.name AS productName,
      p.thumnail_image_url AS thumbnailImageUrl,
      p.short_description AS shortDescription,
      p.price AS price
    FROM products AS p
    INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
    INNER JOIN categories c ON sc.category_id = c.id
    ${sort}
    ${whereClause}
    `);
};

module.exports = {
  getProducts,
  categoriesProducts,
  getSpecialPriceProducts,
  getAllProducts,
};
