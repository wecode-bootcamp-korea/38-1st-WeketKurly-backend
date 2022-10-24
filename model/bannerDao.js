const myDataSource = require("../util/dataSource");

const responseBigBanner = async () => {
  return await myDataSource.query(`
    SELECT * FROM big_banner_table
    `);
};

const responseSmallBanner = async () => {
  return await myDataSource.query(`
    SELECT * FROM small_banner_table
    `);
};

module.exports = { responseBigBanner, responseSmallBanner };
