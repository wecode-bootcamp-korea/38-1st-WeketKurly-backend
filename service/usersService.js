const usersDao = require("../model/usersDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pwdHash = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);

  return bcrypt.hash(password, salt);
};

const emailRegex = /[a-zA-Z0-9+_]+@[a-z]+\.+[a-z]/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{9,})/;

const signUp = async (userId, password, name, email, genderId, birthday) => {
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

  await usersDao.createUser(userId, hashPwd, name, email, genderId, birthday);
};

const signIn = async (userId, password) => {
  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 400;

    throw error;
  }

  const user = await usersDao.searchUser(userId);
  const pwdMatch = await bcrypt.compare(password, user.password);

  if (!pwdMatch) {
    const error = new Error("WRONG_PASSWORD");
    error.statusCode = 401;

    throw error;
  }

  const accessToken = {
    accessToken: jwt.sign({ id: user.userId }, process.env.JWT_SECRET_KEY),
    userName: user.name,
  };

  return accessToken;
};

module.exports = { signUp, signIn };
