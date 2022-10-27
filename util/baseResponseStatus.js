module.exports = {
    SUCCESS: { isSuccess: true, code: 1000, message: '성공' },

    //토큰
    TOKEN_EMPTY: { isSuccess: false, code: 2000, message: 'JWT 토큰을 입력해주세요.' },
    TOKEN_VERIFICATION_FAILURE: { isSuccess: false, code: 3003, message: 'JWT 토큰 검증 실패' },
    TOKEN_VERIFICATION_SUCCESS: { isSuccess: true, code: 1001, message: 'JWT 토큰 검증 성공' },
    TOKEN_EXPIRED: { isSuccess: false, code: 3004, message: 'JWT 토큰이 만료되었습니다.' },

    //응답에러
    SIGNUP_REDUNDANT_ID: { isSuccess: false, code: 3000, message: '중복된 아이디 입니다.' },
    SIGNIN_WRONG: { isSuccess: false, code: 3001, message: '아이디 혹은 비밀번호가 틀렸습니다.' },
    SIGNIN_INACTIVE_ACCOUNT: {
        isSuccess: false,
        code: 3002,
        message: '탈퇴 된 계정입니다. 고객센터에 문의해주세요.',
    },
    PRODUCT_BUY_EMPTY: {
        isSuccess: false,
        code: 3004,
        message: '구매하신 상품이 없습니다.',
    },
    PRODUCT_NOT_QUANTITY: {
        isSuccess: false,
        code: 3005,
        message: '상품의 재고가 없습니다.',
    },
    USER_POINT_FAIL: {
        isSuccess: false,
        code: 3006,
        message: '포인트가 부족합니다.',
    },
    //Connection, Transaction 등의 서버 오류
    DB_ERROR: { isSuccess: false, code: 4000, message: '데이터 베이스 에러' },
    SERVER_ERROR: { isSuccess: false, code: 4001, message: '서버 에러' },
};
