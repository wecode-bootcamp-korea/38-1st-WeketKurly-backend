const likeDao = require("../model/likesDao");

const getLikes = async (userId) => {
      return await likeDao.getLikes(userId);
};

const inputLikes = async (productId, userId) => {

  const checkLike = await likeDao.checkLikes(productId, userId);

  if (!checkLike.exist) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

    if (checkLike.exist === '0') {
      const inputLike = await likeDao.inputLikes(productId, userId);
  
      return inputLike;
    } else if (checkLike.exist !== '0') {
      const deleteLike = await likeDao.deleteLikes(productId, userId);
  
      return deleteLike;
    }
};

module.exports = { getLikes, inputLikes };