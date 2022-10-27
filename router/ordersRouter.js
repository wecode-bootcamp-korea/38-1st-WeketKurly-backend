const express = require("express");
const order = require("../controller/ordersController");
const { jwtMiddleware } = require('../util/jwtMiddleware');
const router = express.Router();

// 주문서 조회하기 API
router.get('/info', jwtMiddleware, order.orderInfo);

// 주문하기 API
router.post('/', jwtMiddleware, order.addOrder);




module.exports = router;