const commentsDao = require("../model/commentsDao");

const createComment = async (title, contant, productId, helpCount, userId) => {
  return await commentsDao.createComment(
    title,
    contant,
    productId,
    helpCount,
    userId
  );
};

const searchComment = async () => {
  return await commentsDao.searchComment();
};

module.exports = { createComment, searchComment };
