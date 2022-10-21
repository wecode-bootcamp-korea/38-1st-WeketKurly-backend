const bannerService = require("../service/bannerService");

const getBigBanners = async (req, res, next) => {
  const bigBanners = await bannerService.getBigBanners();
  return res.status(200).json({ message: bigBanners });
};

const getSmallBanners = async (req, res, next) => {
  const smallBanners = await bannerService.getSmallBanners();
  return res.status(200).json({ message: smallBanners });
};

module.exports = { getBigBanners, getSmallBanners };
