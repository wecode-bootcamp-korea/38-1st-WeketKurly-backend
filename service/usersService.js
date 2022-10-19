const usersDao = require("../model/usersDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pwdHash = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return bcrypt.hash(password, salt);
};

const signUp = async (userId, password, name, email, genderId, birthday) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_EMAIL");
    error.statusCode = 400;

    throw error;
  }

  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 400;

    throw error;
  }
  const hashPwd = await pwdHash(password);

  await usersDao.signUp(userId, hashPwd, name, email, genderId, birthday);
};

const signIn = async (userId, password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 400;

    throw error;
  }

  const user = await usersDao.signIn(userId);
  const pwdMatch = await bcrypt.compare(password, user.password);

  if (!pwdMatch) {
    const error = new Error("WRONG_PASSWORD");
    error.statusCode = 401;

    throw error;
  }

  const accessToken = jwt.sign({ id: user.userId }, process.env.JWT_SECRET_KEY);

  return accessToken;
};

module.exports = { signUp, signIn };
