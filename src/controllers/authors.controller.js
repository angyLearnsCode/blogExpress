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

const createAuthor = (req, res) => {
  const { nombre, email, telefono } = req.body;
  res.send("Se crea un nuevo autor");
};

// // OPCIONALES

//   // Compruebo si authorId es un numero
//   if (isNaN(authorId)) {
//     res.status(400).send("El valor debe ser un número");
//   }

//   res.send("Recupero contacto por ID");
// };

// const edit = (req, res) => {
//   res.send("Se actualiza un autor");
// };

// EXPORTADOS

module.exports = {
  getAll,
  getById,
  createAuthor,
};
