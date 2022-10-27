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
      "commentId", id,
      "commentTitle", title,
      "commentContent", contant,  
      "userId", user_id, 
      "helpCount", help_count  
      )
  ) AS comment
  FROM reviews
  GROUP BY productId 
  `);
};

module.exports = { createComment, searchComment };
