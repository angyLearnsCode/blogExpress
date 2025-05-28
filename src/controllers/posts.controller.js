const Posts = require("../models/posts.model");
const Authors = require("../models/authors.model");

const selectAll = async (req, res) => {
  const posts = await Posts.selectAll();
  res.json(posts);
};

const selectByAuthorId = async (req, res) => {
  const { authorId } = req.params;
  const author = await Authors.selectById(authorId);
  if (!author) {
    return res.status(404).json({ message: "El ID del autor no existe" });
  }
  const posts = await Posts.selectByAuthorId(authorId);
  res.json(posts);
};

const create = async (req, res) => {
  const { title, description, category, author_idauthor } = req.body;
  //Verificador de campos
  if (!title || !description || !category || !author_idauthor) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }
  // Verificador author_id exists
  const authorExists = await Authors.selectById(author_idauthor);
  if (!authorExists) {
    return res.status(404).json({ message: "El ID del autor no existe" });
  }

  const result = await Posts.insert({
    title,
    description,
    category,
    author_idauthor,
  });
  res
    .status(201)
    .json({ message: "Post creado con éxito", id: result.insertId });
};

module.exports = {
  selectAll,
  selectByAuthorId,
  create,
};
