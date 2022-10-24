const appDataSource = require("../util/dataSource");

const checkAllProduct = async() =>{
    try{
        const [AllProduct] = await appDataSource.query(
            `
            select conunt(*) 
            from products
            `)
        return Object.values(AllProduct)[0]
        
    }
    catch(err){ const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 500;
    throw error;}
}

const deleteCartsAll = async (userId) => {
    
      return await appDataSource.query(
        `delete from
            carts
        where user_id = ${userId}`
      );
    }
  
const deleteCartsOne = async (userId, cartId) => {
    
      return await appDataSource.query(
        `delete from
          carts c
         WHERE c.user_id = ${userId}
         and c.id = ${cartId}`
      );
  };

const getCart = async (userId) => {
      
      const carts = await appDataSource.query(
        `
        select
        c.quantity,
        c.product_id,
        p.packing_type_id,
        p.id,
        p.name,
        p.price,
        p.thumnail_image_url
        from carts c
        inner join products p on p.id = c.product_id
        where c.user_id = ${userId}`
      )
      if(!carts) {
        const error = new Error("CART_DOES_NOT_EXIST");
        error.statusCode = 400;
        throw error;}
      return carts
};

const existProduct = async (productId) => {
  const [product] = await appDataSource.query(
    `
    select *
    from products
    where id = ${productId}
    `
  );
  return product;
};

const checkStock = async (productId) => {
  const [stock] = await appDataSource.query(
    `
    select
        stock
    from products
    where id = ${productId}`
  );

  return parseInt(Object.values(stock));
};

const existCart = async (productId, userId) => {
  const [existCartPd] = await appDataSource.query(
    `
    select count(*)
    from carts
    where product_id = ${productId}
    and user_id = ${userId}
    `
  );

  return parseInt(Object.values(existCartPd)[0]);
};

const inputCarts = async (quantity, productId, userId) => {
  try {
    return await appDataSource.query(
      `
      insert into carts(
            quantity, 
            product_id, 
            user_id
         ) values (?, ?, ?)`,
      [quantity, productId, userId]
    );
  } catch (err) {
    const error = new Error("PRODUCT_DOES_NOT_EXIST");
    error.statusCode = 400;
    throw error;
  }
};

const updateCart = async (quantity, productId, userId) => {
  try {
    return await appDataSource.query(
      `
        update carts 
        set quantity = quantity + ${quantity}
        where product_id = ${productId} 
        and user_id = ${userId}`
    );
  } catch (err) {
    const error = new Error("PRODUCT_DOES_NOT_EXIST");
    error.statusCode = 400;
    throw error;
  }
};

const checkAllCart = async (userId) => {
  const [cartCounting] = await appDataSource.query(
    `
    select count(*) 
    from carts
    where user_id = ${userId}`
);

  return parseInt(Object.values(cartCounting));
};

const updateQuantity = async (quantity, productId, userId) => {
  
    await appDataSource.query(
    `
    update carts 
    set quantity = ${quantity}
    where product_id = ${productId} 
    and user_id = ${userId}
    `
    )
};

module.exports = {
    checkAllProduct,
    existProduct,
    inputCarts,
    existCart,
    updateCart,
    checkStock,
    checkAllCart,
    getCart,
    deleteCartsAll,
    deleteCartsOne,
    updateQuantity
};