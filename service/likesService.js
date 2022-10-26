const likeDao = require("../model/likesDao");

const getLikes = async (userId) => {
      return await likeDao.getLikes(userId);
};

const inputLikes = async (productId, userId) => {
  const isExist = await likeDao.checkLikes(productId, userId);

  if (isExist) return await likeDao.inputLikes(productId, userId);
  if (!isExist) return await likeDao.deleteLikes(productId, userId);
};

module.exports = { getLikes, inputLikes };