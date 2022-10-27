const commentsService = require("../service/commentsService");
const { catchAsync } = require("../util/error");

const createComment = catchAsync(async (req, res, next) => {
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
});

const searchComment = catchAsync(async (req, res, next) => {
  const { productId } = req.params;
  const data = await commentsService.searchComment(productId);
  return res.json({ data: data });
});

module.exports = { createComment, searchComment };
