const likeService = require("../service/likesService");
const baseResponse = require("../util/baseResponseStatus");
const { response, errResponse } = require('../util/response');

const getLikes = async (req, res) => {
  try {
    const userId = req.user.id;
      
    const alllikes = await likeService.getLikes(userId);
      
      return res.status(201).json(response(baseResponse.SUCCESS, { data: alllikes}));
  } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

const inputLikes = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.body;

    const inputlike = likeService.inputLikes(userId, productId);
    
    return res.status(201).json(response(baseResponse.SUCCESS, { data: inputlike}));
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
}
}

module.exports = { getLikes, inputLikes };