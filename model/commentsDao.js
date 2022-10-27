const myDataSource = require("../util/dataSource");

const createComment = async (title, contents, productId, userId) => {
  const data = await myDataSource.query(
    `INSERT INTO reviews (
            title, contant, user_id, product_id, help_count
        ) VALUES (?, ?, ?, ?, ?)`,
    [title, contents, userId, productId, 0]
  );
  return data.insertId;
};

const searchComment = async () => {
  return await myDataSource.query(`
  SELECT
  product_id AS product_id,
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
  GROUP BY product_id 
  `);
};

module.exports = { createComment, searchComment };
