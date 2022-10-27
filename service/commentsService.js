const commentsDao = require("../model/commentsDao");

const createComment = async (title, contents, productId, userId) => {
  return await commentsDao.createComment(title, contents, productId, userId);
};

const searchComment = async (productId) => {
  return await commentsDao.searchComment(productId);
};

module.exports = { createComment, searchComment };
