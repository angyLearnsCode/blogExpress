const getAll = (req, res) => {
  res.send("Recupera todos los autores");
};

const getById = (req, res) => {
  const { authorId } = req.params;

  // Compruebo si authorId es un numero
  if (isNaN(authorId)) {
    res.status(400).send("El valor debe ser un número");
  }

  res.send("Recupero contacto por ID");
};

const create = (req, res) => {
  const { nombre, email, telefono } = req.body;
  res.send("Se crea un nuevo autor");
};

const edit = (req, res) => {
  res.send("Se actualiza un autor");
};

module.exports = {
  getAll,
  getById,
  create,
  edit,
};
