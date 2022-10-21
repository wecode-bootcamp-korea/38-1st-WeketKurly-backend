const bannerDao = require("../model/bannerDao");

const getBigBanners = async () => {
  return await bannerDao.responseBigBanner();
};

const getSmallBanners = async () => {
  return await bannerDao.responseSmallBanner();
};

module.exports = { getBigBanners, getSmallBanners };
