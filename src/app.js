// Creation and configuration of the Express APP
const express = require("express");
const cors = require("cors");
const fs = require("node:fs/promises");
const dayjs = require("dayjs");

const app = express();
app.use(express.json());
app.use(cors());

// Route configuration
app.use("/api", require("./routes/api.routes"));

// Middleware
app.use((req, res, next) => {
  console.log(dayjs().format("DD/MM/YYYY HH:mm.ss"));
  next();
});
app.use(async (req, res, next) => {
  const fechaActual = dayjs().format("DD/MM/YYYY HH:mm.ss");
  const linea = `[${fechaActual}] METHOD: ${req.method}. URL: ${req.url}\n`;
  await fs.appendFile("./main.log", linea);
  next();
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

module.exports = app;
