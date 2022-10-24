const myDataSource = require("../util/dataSource");

const getCategoriesName = async () => {
  return await myDataSource.query(`
        SELECT 
          c.id AS mainCategoriesId,
          c.name AS mainCategoriesName
        FROM categories AS c
    `);
};

const getSubCategoriesName = async (categoriesId) => {
  return await myDataSource.query(
    `SELECT    
        sc.id AS subCategoriesId,
        sc.name AS subCategoriesName
      FROM sub_categories AS sc
      WHERE sc.category_id = ?
    `,
    [categoriesId]
  );
};

module.exports = { getCategoriesName, getSubCategoriesName };
