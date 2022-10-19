const usersService = require("../service/usersService.js");
const { catchAsync } = require("../util/error");

const signUp = catchAsync(async (req, res, next) => {
  const { userId, password, name, email, genderId, birthday } = req.body;
  if (!userId || !password || !name || !email || !genderId || !birthday) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }
  await usersService.signUp(userId, password, name, email, genderId, birthday);

  return res.status(200).json({ message: "SIGNUP_SUCCESS" });
});

module.exports = { signUp };
