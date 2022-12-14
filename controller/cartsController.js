const cartService = require("../service/cartsService");
const baseResponse = require("../util/baseResponseStatus");
const { response, errResponse } = require('../util/response');

/**
 * API
 * API Name : 장바구니 상품 삭제 API (개별, 전체 추가)
 */

const deleteCartsAll = async (req, res) => {
    try {
      const userId = req.user.id;
  
      await cartService.deleteCartsAll(userId);

      return res.status(200).json(response(baseResponse.SUCCESS, "CART_DELETE_SUCCESS"));
      
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({ message: err.message });
    }
  };

const deleteCartsOne = async (req, res) => {
    try {
    
    const userId = req.user.id;
    const {cartId} = req.params;

    await cartService.deleteCartsOne(userId, cartId);

    return res.status(200).send(response(baseResponse.SUCCESS, "CART_DELETE_SUCCESS"));
    }
    catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({ message: err.message });
    }
  }

  /**
 * API
 * API Name : 장바구니 상품 조회 API
 */

const getCarts = async (req, res) => {
    try {
        const userId = req.user.id;
        
        const allCart = await cartService.getCarts(userId);
        
        return res.status(201).json(response(baseResponse.SUCCESS, { data: allCart}));
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
}

/**
 * API
 * API Name : 장바구니 상품 추가 API
 */

const inputCarts = async (req, res) => {
    try {
      const { quantity, productId } = req.body;
      const userId = req.user.id;

    if (!quantity) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await cartService.inputCarts(quantity, productId, userId);
    return res.status(201).json(response(baseResponse.SUCCESS, "CART_ADD_SUCCESS"));
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const addQuantity = async (req, res) => {
  try {
    const { quantity, productId } = req.body
    const userId = req.user.id;
  
  if (!quantity || !productId) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  await cartService.addQuantity(quantity, productId, userId);
  return res.status(201).json(response(baseResponse.SUCCESS, "QUANTITY_ADD_SUCCESS"));
} catch (err) {
  console.log(err);
  return res.status(err.statusCode || 500).json({ message: err.message });
}
};

/**
 * API
 * API Name : 장바구니 내 상품 전체 수량 조회 API
 */

const checkAllCart = async (req, res) => {
    try {
    const userId = req.user.id;

    const cartCounting = await cartService.checkAllCart(userId);
    return res.status(200).json(response(baseResponse.SUCCESS, { data: cartCounting}));
    } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
    }
};

module.exports = { getCarts, inputCarts, checkAllCart, deleteCartsAll, deleteCartsOne, addQuantity};