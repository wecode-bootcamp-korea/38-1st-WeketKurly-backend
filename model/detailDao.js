const myDataSource = require("../util/dataSource");

const getProduct = async (productId) => {
  const data = await myDataSource.query(
    `
  SELECT * , 
  pt.packing_types 
  FROM products AS p
  INNER JOIN packing_types pt ON p.packing_type_id = pt.id
  WHERE p.id = ?
  `,
    [productId]
  );

  return data;
};

module.exports = { getProduct };
