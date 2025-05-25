const getAll = (req, res) => {
  res.send("Recupera todos los autores");
};

const create = (req, res) => {
  res.send("Se crea un nuevo contacto");
};

module.exports = {
  getAll,
  create,
};
