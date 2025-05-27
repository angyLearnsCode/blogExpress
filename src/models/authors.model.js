const db = require("../config/db");

// SELECT * FROM authors;
const selectAll = async () => {
  const [result] = await db.query("SELECT * FROM AUTHOR");
  return result;
};

module.exports = {
  selectAll,
};
