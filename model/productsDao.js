const myDataSource = require("../util/dataSource");

const getProducts = async () => {
  const data = await myDataSource.query(`
  SELECT
  p.name AS productName,
  p.thumnail_image_url AS thumbnailImageUrl,
  p.short_description AS shortDescription,
  p.price AS price
  FROM products AS p
  ORDER BY RAND()
  LIMIT 10;
  `);

  return data;
};

module.exports = { getProducts };
