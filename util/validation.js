const validateproductId = (productId) => {
    const pdIdValidation = new RegExp(/^\d+$/);
  
    if (!pdIdValidation.test(productId)) {
      const err = new Error("INVALID_PRODUCT_ID");
      err.statusCode = 400;
      throw err;
    }
  };
  
const validateQuantity = (quantity) => {
    const quantityValidation = new RegExp(/^\d+$/);
    
    if (!quantityValidation.test(quantity)) {
      const err = new Error("INVALID_QUANTITY");
      err.statusCode = 400;
      throw err;
    }
  };
  
  module.exports = { validateQuantity, validateproductId };
  