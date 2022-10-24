const express = require("express");
const cartController = require("../controller/cartsController");
const { jwtMiddleware } = require('../util/jwtMiddleware');

const router = express.Router();

// 장바구니 조회 API
router.get("/getcarts", jwtMiddleware, cartController.getCarts);

// 장바구니 삭제 API - 전체삭제
router.delete("/delete-carts", jwtMiddleware, cartController.deleteCartsAll);

// 장바구니 삭제 API - 개별삭제
router.delete("/:cartId", jwtMiddleware, cartController.deleteCartsOne);

// 장바구니 추가 API
router.post("/input", jwtMiddleware, cartController.inputCarts);

// 장바구니 담긴 상품 전체 갯수 조회 API
router.get("/usercart", jwtMiddleware, cartController.checkAllCart);

// 장바구니 상품 개수 변경 API
router.patch("/update", jwtMiddleware, cartController.addQuantity);


module.exports = router;
