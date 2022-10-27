const myDataSource = require("../util/dataSource");

const getProducts = async (productId) => {
  const data = await myDataSource.query(
    `
  SELECT 
  p.id AS product_id,
  p.name AS product_name,
  p.thumnail_image_url AS thumbnail_image_url,
  p.short_description AS short_description,
  p.contactant AS contactant,
  pt.packing_types AS packing_types,
  p.weight,
  p.origin,
  p.allerge,
  p.expiration_date AS expiration_date,
  p.price,
  p.detail_image_url AS detail_image_url,
  JSON_ARRAYAGG(
    JSON_OBJECT(
    "reviewId", r.id,
    "reviewTitle", r.title,
    "reviewContent", r.contant,
    "reviewHelpCount", r.help_count,
    "userName", u.name  
    )
  ) AS review
  FROM products AS p
  LEFT JOIN packing_types AS pt ON p.packing_type_id = pt.id
  LEFT JOIN reviews AS r ON r.product_id = p.id
  LEFT JOIN users AS u ON r.user_id = u.id
  WHERE p.id = ?
  GROUP BY product_id
  `,
    [productId]
  );

  return data;
};

module.exports = { getProducts };
