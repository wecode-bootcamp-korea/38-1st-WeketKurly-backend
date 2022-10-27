const myDataSource = require("../util/dataSource");

const createComment = async (title, contant, productId, helpCount, userId) => {
  const data = await myDataSource.query(
    `INSERT INTO reviews (
            title, contant, user_id, product_id, help_count
        ) VALUES (?, ?, ?, ?, ?)`,
    [title, contant, userId, productId, helpCount]
  );
  return data.insertId;
};

const searchComment = async () => {
  return await myDataSource.query(`
  SELECT 
  product_id AS productId,
  JSON_ARRAYAGG(
    JSON_OBJECT(
    "reviewId", r.id,
    "reviewTitle", r.title,
    "reviewContent", r.contant,
    "reviewHelpCount", r.help_count,
    "userName", u.name  
    )
  ) AS review
  FROM reviews AS r
  LEFT JOIN users AS u ON r.user_id = u.id
  GROUP BY productId 
  `);
};

module.exports = { createComment, searchComment };
