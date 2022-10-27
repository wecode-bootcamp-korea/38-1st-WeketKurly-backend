const commentsService = require("../service/commentsService");

const createComment = async (req, res, next) => {
  const userId = req.user.id;
  const { title, contents, productId } = req.body;

  if (!title || !contents || !productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const data = await commentsService.createComment(
    title,
    contents,
    productId,
    userId
  );
  return res.json({ data: data });
};

const searchComment = async (req, res, next) => {
  const data = await commentsService.searchComment();
  return res.json({ data: data });
};

module.exports = { createComment, searchComment };
