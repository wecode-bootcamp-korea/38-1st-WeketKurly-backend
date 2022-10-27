const likeDao = require("../model/likesDao");

const getLikes = async (userId) => {
      return await likeDao.getLikes(userId);
};

// 찜 목록에 있는지 체크 (프론트 요청사항)
const checkLike = async (productId, userId) => {
  const checkLike = await likeDao.checkLikes(productId, userId);
  
  if (checkLike.exist === '0') { // 찜 목록에 없을 때 
    return false;
  } else if (checkLike.exist !== '0') { // 찜 목록에 있을 때
    return true;
  }
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

module.exports = { getLikes, inputLikes, checkLike };