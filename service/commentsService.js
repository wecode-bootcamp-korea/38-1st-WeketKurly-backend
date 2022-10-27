const commentsDao = require("../model/commentsDao");

const createComment = async (title, contents, productId, userId) => {
  return await commentsDao.createComment(title, contents, productId, userId);
};

const searchComment = async () => {
  return await commentsDao.searchComment();
};

module.exports = { createComment, searchComment };
