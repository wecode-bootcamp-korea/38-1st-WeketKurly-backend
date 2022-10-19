const myDataSource = require("../util/dataSource");

const signUp = async (userId, hashPwd, name, email, genderId, birthday) => {
  await myDataSource.query(
    `
    INSERT INTO users (userId, password, name, email, gender_id, birthday) 
    VALUES (?, ?, ?, ?, ?, ?)
  `,
    [userId, hashPwd, name, email, genderId, birthday]
  );
};

module.exports = { signUp };
