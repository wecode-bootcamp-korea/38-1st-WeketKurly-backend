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

const searchUser = async (userId) => {
  const data = await myDataSource.query(
    `SELECT id, userId, password
    FROM users
    WHERE userId = ?`,
    [userId]
  );
  return data[0];
};

module.exports = { createUser, searchUser };
