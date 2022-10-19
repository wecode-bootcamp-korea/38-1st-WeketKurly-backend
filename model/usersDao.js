const myDataSource = require("../util/dataSource");

const createUser = async (userId, hashPwd, name, email, genderId, birthday) => {
  await myDataSource.query(
    `
    INSERT INTO users (userId, password, name, email, gender_id, birthday) 
    VALUES (?, ?, ?, ?, ?, ?)
  `,
    [userId, hashPwd, name, email, genderId, birthday]
  );
};

module.exports = { createUser };
