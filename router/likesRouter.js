const express = require("express");
const likeController = require("../controller/likesController");
const { jwtMiddleware } = require('../util/jwtMiddleware');

const router = express.Router();

// 찜하기 조회 API
router.get("/getlikes", jwtMiddleware, likeController.getLikes);

// 찜하기 추가 API
router.post("/input", jwtMiddleware, likeController.inputLikes);

// 찜하기 체크 API (프론트 요청 사항)
router.get("/check", jwtMiddleware, likeController.checkLike);

module.exports = router;