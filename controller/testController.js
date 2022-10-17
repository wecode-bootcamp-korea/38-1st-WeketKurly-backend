const testService = require("../service/testService.js");

const test = async (req, res) => {
  const { test } = req.body;
  const data = await testService.test(test);
  return res.json({ data });
};

module.exports = { test };
