const db = require("../config/db");

// SELECT * FROM posts mostrando datos del autor;
const selectAll = async () => {
  const [result] = await db.query(
    `SELECT
    p.idposts AS post_id,
    p.title AS post_title,
    p.description,
    p.creationdate,
    p.category,
    a.idauthor AS author_id,
    a.name AS author_name,
    a.email AS author_email,
    a.image AS author_image
    FROM posts p
    JOIN author a ON p.author_idauthor = a.idauthor
    ORDER BY p.creationdate DESC`
  );
  return result;
};

// Obtener posts escritos por un autor específico con todos sus datos
const selectByAuthorId = async (authorId) => {
  const [result] = await db.query(
    `SELECT
    p.idposts AS post_id,
    p.title AS post_title,
    p.description,
    p.creationdate,
    p.category,
    a.idauthor AS author_id,
    a.name AS author_name,
    a.email AS author_email,
    a.image AS author_image
    FROM
    posts p
    JOIN
    author a ON p.author_idauthor = a.idauthor
    WHERE
    a.idauthor = ?
    ORDER BY p.creationdate DESC`,
    [authorId]
  );
  if (result.length === 0) return null;
  return result;
};

//

// INSERT INTO posts
const insert = async ({ title, description, category, author_idauthor }) => {
  const [result] = await db.query(
    "INSERT INTO posts (title, description, category, author_idauthor) VALUES (?, ?, ?, ?)",
    [title, description, category, author_idauthor]
  );
  return result;
};

// EXPORTADOS

module.exports = {
  selectAll,
  selectByAuthorId,
  insert,
};
