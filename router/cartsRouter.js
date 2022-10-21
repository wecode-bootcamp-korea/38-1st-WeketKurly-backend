const express = require("express");
const cartController = require("../controller/cartsController");
const { jwtMiddleware } = require('../util/jwtMiddleware');

const router = express.Router();

// 장바구니 조회 API
router.get("/getcarts", jwtMiddleware, cartController.getCarts);

// 장바구니 삭제 API
router.delete("/delete-carts", jwtMiddleware, cartController.deleteCartsAll);
router.delete("/:productId", jwtMiddleware, cartController.deleteCartsOne);

// 장바구니 추가 API
router.post("/:productId", jwtMiddleware, cartController.inputCarts);

// 장바구니 상품 개수 변경 API
router.get("/updating", jwtMiddleware, cartController.userAddCart);
router.patch("/:productId", jwtMiddleware, cartController.addQuantity);

module.exports = router;
