const orderDao = require("../model/ordersDao");
const cartDao = require("../model/cartsDao");
const { pool } = require("../util/dataSource");
const { logger } = require('../util/winston');
const baseResponse = require("../util/baseResponseStatus");
const { response, errResponse } = require('../util/response');

// 주문서 조회하기(장바구니 상품)
const getOrderInfo = async (userId) => {
    try {
        const connection = await pool.createQueryRunner();
        await connection.connect();
        const getOrderInfo = await orderDao.getOrderInfo(connection, userId);
        connection.release();
        return getOrderInfo;
    } catch (err) {
        logger.error(`App - getOrderInfo Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

// 주문서 조회하기(유저 정보)
const getUserInfo = async (userId) => {
    try {
        const connection = await pool.createQueryRunner();
        await connection.connect();
        const getUserInfo = await orderDao.getUserInfo(connection, userId);
        connection.release();
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
            const inputOrderItemResult = await orderDao.inputOrderItems(
                connection, productId, quantity, totalPrice, shipmentId
            );
            const orderResult = await orderDao.inputOrder(
                connection, userId
            );

            const checkStock = await cartDao.checkStock(productId);

            if(quantity > checkStock) {
                return errResponse(baseResponse.PRODUCT_NOT_QUANTITY)
            } 
            if (quantity <= checkStock) {
                const updateItemStatus = await orderDao.updateItemStatus(productId);
                const point = await orderDao.getPoint(userId); 
                if(totalPrice > point) {
                    return  errResponse(baseResponse.USER_POINT_FAIL)
                }
                if((totalPrice <= point) && (updateItemStatus == 1)) {
                const inputPayResult = await orderDao.pointDeduct(
                    connection, totalPrice, userId
                );
                const updateOrderStatus = await orderDao.updateOrderStatus(connection, userId);
                await connection.commitTransaction();
                connection.release();
                deleteCart(userId);
                return inputOrderItemResult, updateOrderStatus, orderResult, inputPayResult;
                }
            };   
        } catch (err) {
            await connection.rollbackTransaction();
            connection.release();
            return errResponse(baseResponse.DB_ERROR);
        }
    } catch (err) {
        logger.error(`App - orders Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
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