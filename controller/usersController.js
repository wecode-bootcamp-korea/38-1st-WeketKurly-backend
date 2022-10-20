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

const signIn = catchAsync(async (req, res, next) => {
  const { userId, password } = req.body;

  if (!userId || !password) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  const token = await usersService.signIn(userId, password);

  return res.status(200).json({ message: "LOGIN_SUCCESS", token: token });
});

module.exports = { signUp, signIn };
