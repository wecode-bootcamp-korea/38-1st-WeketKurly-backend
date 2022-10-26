const orderService = require('../service/ordersService');
const baseResponse = require('../util/baseResponseStatus');
const { response, errResponse } = require('../util/response');
  
/**
 * API
 * API Name : 주문서 조회 하기 API
 */ 

const orderInfo = async (req, res) => {
    const userId = req.user.id;
    const getOrderInfo = await orderService.getOrderInfo(userId);
    const getUserInfo = await orderService.getUserInfo(userId);
    const result = {
        productInfo: getOrderInfo,
        userInfo: getUserInfo[0],
    };
    return res.send(response(baseResponse.SUCCESS, result));
};

/**
 * API
 * API Name : 주문하기 API
 */

const addOrder = async (req, res) => {
    const userId = req.user.id;
    const {
        productId, quantity, totalPrice, shipmentId
    } = req.body;

    const order = await orderService.createOrders(
        userId, productId, quantity, totalPrice, shipmentId
    );

    return res.send(response(baseResponse.SUCCESS, '주문이 완료 되었습니다.'));
};

module.exports = { orderInfo, addOrder};