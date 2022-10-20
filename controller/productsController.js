const productsService = require("../service/productsService");

const getProducts = async (req, res, next) => {
  const productCarousel = await productsService.getProducts();
  const bigBannerUrl = await productsService.getBigBanners();
  const smallBannerUrl = await productsService.getSmallBanners();
  return res.json({
    productCarousel: productCarousel,
    bigBannerUrl: bigBannerUrl,
    smallBannerUrl: smallBannerUrl,
  });
};

const getMdProducts = async (req, res, next) => {
  const { categoriesId } = req.params;

  const data = await productsService.getMdProducts(categoriesId);
  return res.json({ mdRecommand: data });
};

module.exports = { getProducts, getMdProducts };
