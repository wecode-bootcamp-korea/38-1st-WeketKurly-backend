// 주문서 조회하기(장바구니 상품)
const getOrderInfo = async(connection, userId) => {
    const [orderInfo] = await connection.query(
    `
    select  c.id,
            c.quantity,
            c.product_id,
            p.id,
            p.name,
            p.thumnail_image_url,
            format(ifnull(p.price * c.quantity, 0), 0) as totalPrice
        from carts c
            join products p on c.product_id = p.id
        where user_id = ${userId}
    `);
    if(!orderInfo) {
      const error = new Error("CART_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;}
    return orderInfo;
}

// 주문서 조회하기(유저 정보)
const getUserInfo = async(connection, userId) => {
    const [userInfo] = await connection.query(
    `
    select u.id, u.name, u.email, u.point
        from users u
            join orders o on u.id = o.user_id
        where u.id = ${userId}
    `);
    if(!userInfo) {
      const error = new Error("USER_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;}
    return userInfo;
}

// 주문하기 (장바구니 상품)
const inputOrderItems = async (
  connection, orderId, productId, quantity, totalPrice, orderItemStatusId, shipmentId
  ) => {
    try {
      return await connection.query(
        `
        insert into order_items(
              oreder_id,
              product_id,
              quantity,
              total_price as totalPrice,
              order_item_status_id,
              shipment_id,
           ) values (?, ?, ?, ?, ?, ?)`,
           [orderId, productId, quantity, totalPrice, orderItemStatusId, shipmentId]);
    } catch (err) {
      const error = new Error("CARTS_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;
    }
};

// 주문하기 (유저 정보)
const inputOrder = async (connection, userId, orderStatusId) => {
    try {
      return await connection.query(
        `
        insert into orders(
              user_id,
              order_status_id,
           ) values (?, ?)`,
           [userId, orderStatusId]);
    } catch (err) {
      const error = new Error("CARTS_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;
    }
};

// 포인트 조회
const getPoint = async(connection, userId) => {
    const [point] = await connection.query(
    `
    select u.point
        from users u
        where u.id = ${userId}
    `);
    if(!point) {
      const error = new Error("POINT_DOES_NOT_EXIST");
      error.statusCode = 400;
      throw error;}
    return point;
}

// 포인트 차감
const pointDeduct = async (connection, totalPrice, userId) => {
    const [pointDeduct] = await connection.query(
    `
    update users u
       set point = point - ${totalPrice}
     where u.id = ${userId}
    `);
    return pointDeduct;
}

// 상품 상태 조회
const getItemStatus = async(connection, userId) => {
    const [itemStatus] = await connection.query(
    `
    select order_item_status_id as istatus
        from order_item oi
        where oi.order_id = (select o.id from orders o where o.user_id = ${userId})
    `);

    return itemStatus;
}

// 결제 상태 조회
const getOrderStatus = async(connection, userId) => {
    const [orderStatus] = await connection.query(
    `
    select order_status_id as ostatus
        from orders o
        where o.user_id = ${userId}
    `);    
    return orderStatus;
}

// 상품 상태 변경 (재고 있음)
const updateItemStatus1 = async (connection, userId) => {
    const [updateItemStatus1] = await connection.query(
    `
    update order_items oi
        set order_item_status_id = 1
      where oi.order_id = (select o.id from orders o where o.user_id = ${userId})
        and order_item_status_id = 2 or order_item_status_id = 3
    `);
    return updateItemStatus1;
}

// 상품 상태 변경 (재고 없음)
const updateItemStatus2 = async (connection, userId) => {
  const [updateItemStatus2] = await connection.query(
  `
  update order_items oi
      set order_item_status_id = 2
    where oi.order_id = (select o.id from orders o where o.user_id = ${userId})
      and order_item_status_id = 1 or order_item_status_id = 3
  `);
  return updateItemStatus2;
}

// 상품 상태 변경 (디폴트)
const updateItemStatus3 = async (connection, userId) => {
  const [itemStatus3] = await connection.query(
  `
  update order_item oi
      set order_item_status_id = 3
      where oi.order_id = (select o.id from orders o where o.user_id = ${userId})
        and order_item_status_id = 1 or order_item_status_id = 2
  `);
  return itemStatus3;
}

// 결제 전
const updateOrderStatus1 = async (connection, userId) => {
  const [updateOrderStatus1] = await connection.query(
  `
  update orders o
      set order_status_id = 1
    where o.user_id = ${userId}
      and order_status_id = 2 or order_status_id = 3
  `);
  return updateOrderStatus1;
}

// 결제 완료
const updateOrderStatus2 = async (connection, userId) => {
  const [updateOrderStatus2] = await connection.query(
  `
  update orders o
      set o.order_status_id = 2
    where o.user_id = ${userId}
      and o.order_status_id = 1
  `);
  return updateOrderStatus2;
}

// 결제 상태 변경 (디폴트)
const updateOrderStatus3 = async (connection, userId) => {
  const [updateOrderStatus3] = await connection.query(
  `
  update orders o
      set o.order_status_id = 3
    where o.user_id = ${userId}
      and o.order_status_id = 1 or o.order_status_id = 2
  `);
  return updateOrderStatus3;
}

// 결제 후 장바구니 비우기
const deleteCart = async (connection, userId) => {
  const [deleteCart] = await connection.query(
  `
  delete from carts c
    where c.user_id = ${userId}
  `);
  return deleteCart;
}

module.exports = {
    getOrderInfo,
    getUserInfo,
    inputOrderItems,
    inputOrder,
    getPoint,
    pointDeduct,
    getItemStatus,
    getOrderStatus,
    updateItemStatus1,
    updateItemStatus2,
    updateItemStatus3,
    updateOrderStatus1,
    updateOrderStatus2,
    updateOrderStatus3,
    deleteCart
};
