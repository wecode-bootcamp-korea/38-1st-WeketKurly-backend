const testDao = require("../model/testDao");

const test = async (test) => {
  return testDao.test(test);
};

module.exports = { test };
