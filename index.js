const express = require("express");

require("dotenv").config();

const app = express();

//GET REVISAR
app.get("/api/authors", (req, res) => {
  res.send("Se recuperan los usuarios");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
