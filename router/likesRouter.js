const express = require("express");
const likeController = require("../controller/likesController");
const { jwtMiddleware } = require('../util/jwtMiddleware');

const router = express.Router();

// 찜하기 조회 API
router.get("/getlikes", jwtMiddleware, likeController.getLikes);

// 찜하기 추가 API
router.post("/input", jwtMiddleware, likeController.inputLikes);

module.exports = router;