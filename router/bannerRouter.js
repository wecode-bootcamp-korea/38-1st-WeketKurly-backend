const express = require("express");
const bannerController = require("../controller/bannerController");

const router = express.Router();

router.get("/big", bannerController.getBigBanners);
router.get("/small", bannerController.getSmallBanners);

module.exports = { router };
