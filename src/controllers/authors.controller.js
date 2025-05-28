const Authors = require("../models/authors.model");

const getAll = async (req, res) => {
  const authors = await Authors.selectAll();
  res.json(authors);
};

const getById = async (req, res) => {
  const { authorId } = req.params;
  const author = await Authors.selectById(authorId);
  if (!author)
    return res.status(404).json({ message: "El ID del autor no existe" });

  res.json(author);
};

const create = async (req, res) => {
  const { name, email, image } = req.body;
  // Verificador campos
  if (!name || !email) {
    return res
      .status(400)
      .json({ message: "Los campos de nombre y email son obligatorios" });
  }
  // Verificador URL de imagen
  if (image && !image.startsWith("http")) {
    return res.status(400).json({ message: "Formato de URL no válido" });
  }
  // Verificador email inexistente
  const authorExists = await Authors.selectByEmail(email);
  if (authorExists) {
    return res
      .status(409)
      .json({
        message: "El email ya está registrado, por favor selecciona otro",
      });
  }

  // Resultado
  const result = await Authors.insert(req.body);
  const author = await Authors.selectById(result.insertId);
  res.json(author);
};

// EXPORTADOS

module.exports = {
  getAll,
  getById,
  create,
};
