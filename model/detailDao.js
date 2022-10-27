const myDataSource = require("../util/dataSource");

const getProducts = async (productId) => {
  const data = await myDataSource.query(
    `
  SELECT 
  p.id AS productId,
  p.name AS productName,
  p.thumnail_image_url AS thumbnailImageUrl,
  p.short_description AS shortDescription,
  p.contactant AS productContactant,
  pt.packing_types AS packingType,
  p.weight,
  p.origin,
  p.allerge,
  p.expiration_date AS expriationDate,
  p.price,
  p.detail_image_url AS detailImageUrl,
  p.stock,
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
  GROUP BY productId
  `,
    [productId]
  );

  return data;
};

module.exports = { getProducts };
