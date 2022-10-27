const commentsService = require("../service/commentsService");
const { catchAsync } = require("../util/error");

const createComment = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const { title, contant, productId, helpCount } = req.body;

  if (!title || !contant || !productId || !helpCount) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const data = await commentsService.createComment(
    title,
    contant,
    productId,
    helpCount,
    userId
  );
  return res.json({ data: data });
});

const searchComment = catchAsync(async (req, res, next) => {
  const data = await commentsService.searchComment();
  return res.json({ data: data });
});

module.exports = { createComment, searchComment };
