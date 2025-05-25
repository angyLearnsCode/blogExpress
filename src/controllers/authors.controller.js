const getAll = (req, res) => {
  res.send("Recupera todos los autores");
};

const createAuthor = (req, res) => {
  const { nombre, email, telefono } = req.body;
  res.send("Se crea un nuevo autor");
};

// OPCIONALES

const getById = (req, res) => {
  const { authorId } = req.params;

  // Compruebo si authorId es un numero
  if (isNaN(authorId)) {
    res.status(400).send("El valor debe ser un número");
  }

  res.send("Recupero contacto por ID");
};

const edit = (req, res) => {
  res.send("Se actualiza un autor");
};

// EXPORTADOS

module.exports = {
  getAll,
  getById,
  createAuthor,
  edit,
};
