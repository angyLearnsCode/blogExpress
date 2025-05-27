const db = require("../config/db");

// SELECT * FROM author;
const selectAll = async () => {
  const [result] = await db.query("SELECT * FROM author");
  return result;
};

// SELECT * FROM author WHERE id = 1
const selectById = async (autorId) => {
  const [result] = await db.query("SELECT * FROM author WHERE idauthor = ?", [
    autorId,
  ]);
  if (result.length === 0) return null;
  return result[0];
};

module.exports = {
  selectAll,
  selectById,
};
