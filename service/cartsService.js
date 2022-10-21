const cartDao = require("../model/cartsDao");
const { validateQuantity, validateproductId } = require("../util/validation");

const deleteCartsAll = async (userId) => {

    const deleteAllCart = await cartDao.deleteCartsAll(userId);
    
    return deleteAllCart;
  };
  
const deleteCartsOne = async (userId, productId) => {
    validateproductId(productId);
    
    const allProducts = await cartDao.checkAllProduct()
    
    if(productId > allProducts){
      const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
    }

    const deleteCartsOne = await cartDao.deleteCartsOne(userId, productId);
    
    return deleteCartsOne;
  };

const getCarts = async (userId) => {
  
    const getCart = await cartDao.getCart(userId)
      return getCart
    }

const inputCarts = async (quantity, productId, userId) => {
  validateproductId(productId);
  validateQuantity(quantity);

  const existProduct = await cartDao.existProduct(productId);
  const checkCart = await cartDao.existCart(productId, userId);
  const checkStock = await cartDao.checkStock(productId);

  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }

  if (quantity == 0) {
    const err = new Error("QUANTITY_CANNOT_BE_ZERO");
    err.statusCode = 400;
    throw err;
  }

  if(quantity <= checkStock) {

    if (checkCart === 0) {
      const inputCart = await cartDao.inputCarts(quantity, productId, userId);
  
      return inputCart;
    } else if (checkCart > 0) {
      const updateCart = await cartDao.updateCart(quantity, productId, userId);
  
      return updateCart;
    }
  } else {
    const err = new Error("CANNOT_ORDER_QUANTITY_LARGER_THAN_STOCK");
    err.statusCode = 400;
    throw err;
  }
};

const userAddCart = async (userId) => {
  const cartCounting = await cartDao.userAddCart(userId);

  return cartCounting;
};

const addQuantity = async (quantity, productId, userId) => {
  
  validateproductId(productId);
  validateQuantity(quantity);
  
  const existProduct = await cartDao.existProduct(productId);
  const checkStock = await cartDao.checkStock(productId);
  
  if (!existProduct) {
    const err = new Error("PRODUCT_DOES_NOT_EXIST");
    err.statusCode = 404;
    throw err;
  }
  
  if(quantity > checkStock){
    const err = new Error("CANNOT_ORDER_QUANTITY_LARGER_THAN_STOCK");
    err.statusCode = 400;
    throw err;
  }

  if (parseInt(quantity) === 0) {
    const deleteOneCart = await cartDao.deleteOneCart(userId, productId);
    return deleteOneCart;
  } 
  else if (parseInt(quantity) > 0) {
    const updateQuantity = await cartDao.updateQuantity(quantity, productId, userId);

    return updateQuantity;
  }
};

module.exports = {getCarts, inputCarts, userAddCart, deleteCartsAll, deleteCartsOne, addQuantity};