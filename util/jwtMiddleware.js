const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const usersDao = require("../model/usersDao");

const jwtMiddleware = async (req, res, next) => {
  // 1) Getting token and check of it's there
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    const error = new Error("NEED_ACCESS_TOKEN");
    error.statusCode = 401;

    return res.status(error.statusCode).json({ message: error.message });
  }

  // 2) Verification token
  const decoded = await promisify(jwt.verify)(
    accessToken,
    process.env.JWT_SECRET_KEY
  );

  // 3) Check if user still exists
  const user = await usersDao.searchUser(decoded.id);

  if (!user) {
    const error = new Error("USER_DOES_NOT_EXIST");
    error.statusCode = 404;

    return res.status(error.statusCode).json({ message: error.message });
  }

  // 4) GRANT ACCESS
  console.log(user);

  req.user = user;

  next();
};

module.exports = { jwtMiddleware };