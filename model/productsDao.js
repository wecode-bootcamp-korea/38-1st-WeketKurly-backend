const myDataSource = require("../util/dataSource");

const getProducts = async () => {
  return await myDataSource.query(`
  SELECT
    p.name AS productName,
    p.thumnail_image_url AS thumbnailImageUrl,
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
    p.price AS price
  FROM products AS p
  INNER JOIN sub_categories AS sc ON p.sub_category_id = sc.id
  INNER JOIN categories c ON sc.category_id = c.id
  WHERE c.id = ${categoriesId}
  LIMIT 12
  OFFSET 0
  `);
};

const getSpecialPriceProducts = async () => {
  return await myDataSource.query(`
    SELECT 
      sp.discount AS discount,
      p.name AS productName,
      p.short_description AS shortDescription,
      p.price AS productPrice,
      p.thumnail_image_url AS thumbnailIamgeUrl
    FROM special_price AS sp
    INNER JOIN products AS p ON sp.products_id = p.id
  `);
};

module.exports = {
  getProducts,
  categoriesProducts,
  getSpecialPriceProducts,
};
