const orderDao = require("../model/ordersDao");
const cartDao = require("../model/cartsDao");
const { pool } = require("../util/dataSource");
const { logger } = require('../util/winston');
const baseResponse = require("../util/baseResponseStatus");
const { response, errResponse } = require('../util/response');

// 주문서 조회하기(장바구니 상품)
const getOrderInfo = async (userId) => {
    try {
        const getOrderInfo = await orderDao.getOrderInfo(userId);

        return getOrderInfo;
    } catch (err) {
        logger.error(`App - getOrderInfo Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

// 주문서 조회하기(유저 정보)
const getUserInfo = async (userId) => {
    try {
        const getUserInfo = await orderDao.getUserInfo(connection, userId);

        return getUserInfo;
    } catch (err) {
        logger.error(`App - getUserInfo Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

// 주문하기
const orders = async (
    userId, productId, quantity, totalPrice, shipmentId
) => {
    try{
        const connection = await pool.createQueryRunner();
        await connection.connect();
        try {
            connection.startTransaction();

            const checkStock = await cartDao.checkStock(productId);

            if(quantity > checkStock) {
                const updateItemStatus2 = await orderDao.updateItemStatus2(connection, userId);
                return errResponse(baseResponse.PRODUCT_NOT_QUANTITY), updateItemStatus2;
            } 

            if (quantity <= checkStock) {
                const point = await orderDao.getPoint(userId);
                const getItemStatus = await orderDao.getItemStatus(userId);
                const getOrderStatus = await orderDao.getOrderStatus(userId);                
                if(totalPrice > point) {
                    return  errResponse(baseResponse.USER_POINT_FAIL)
                }
                    if((getItemStatus.ostatus == (2 || 3)) && (getOrderStatus == (2 || 3))) {
                        const updateItemStatus1 = await orderDao.updateItemStatus1(connection, userId);
                        const updateOrderStatus1 = await orderDao.updateOrderStatus1(connection, userId);
                        return updateItemStatus1, updateOrderStatus1;
                    }
                if((totalPrice <= point) && (getOrderStatus.ostatus == 1) && (getItemStatus.istatus == 1)) {
                const inputOrderItemResult = await orderDao.inputOrderItems(
                    connection, productId, quantity, totalPrice, shipmentId
                );
                const orderResult = await orderDao.inputOrder(
                    connection, userId
                );
                const inputPayResult = await orderDao.pointDeduct(
                    connection, totalPrice, userId
                );
                const updateOrderStatus2 = await orderDao.updateOrderStatus2(connection, userId);
                await connection.commitTransaction();
                connection.release();
                deleteCart(userId);
                return inputOrderItemResult, updateOrderStatus2, orderResult, inputPayResult;
                }
            };   
        } catch (err) {
            const updateItemStatus3 = await orderDao.updateItemStatus3(connection, userId);
            const updateOrderStatus3 = await orderDao.updateOrderStatus3(connection, userId);
            await connection.rollbackTransaction();
            connection.release();
            return errResponse(baseResponse.DB_ERROR), updateItemStatus3, updateOrderStatus3;
        }
    } catch (err) {
        const updateItemStatus3 = await orderDao.updateItemStatus3(connection, userId);
        const updateOrderStatus3 = await orderDao.updateOrderStatus3(connection, userId);
        logger.error(`App - orders Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR), updateItemStatus3, updateOrderStatus3;
    }
};

const deleteCart = async (userId) => {
    try {
        const deleteCart = await orderDao.deleteCart(userId);

        return deleteCart;
    } catch (err) {
        logger.error(`App - deleteCart Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

module.exports = { getOrderInfo, getUserInfo, orders };