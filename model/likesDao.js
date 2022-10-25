const appDataSource = require("../util/dataSource");

// 찜 목록에 있는지 체크
const checkLikes = async (userId, productId) => {
      const [likes] = await appDataSource.query(
    `select exists(
        select *
        from likes
        where user_id = ${userId} 
        and product_id = ${productId}) as exist`
  );

  return likes;
};

// 찜 목록 조회
const getLikes = async (userId) => {
    const likes = await appDataSource.query(
        `
        select
        l.id,
        l.user_id,
        l.product_id,
        p.name,
        p.thumnail_image_url,
        P.price
        from likes l
        inner join products p on p.id = l.product_id
        where l.user_id = ${userId}`
    );
    return likes;
};

// 찜하기
const inputLikes = async (userId, productId) => {
    const likes = await appDataSource.query(
    `
    insert into likes(
        user_id,
        product_id
    ) values (?, ?)`,
    [userId, productId]
    );
    return likes;
}

// 찜 취소하기
const deleteLikes = async (userId, productId) => {
    const likes = await appDataSource.query(
    `
    delete from
    likes
    where user_id = ${userId}
    and product_id = ${productId}`
    );
    return likes;
}

module.exports = {inputLikes, deleteLikes, getLikes, checkLikes };