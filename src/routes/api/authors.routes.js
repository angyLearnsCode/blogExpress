const {
  getAll,
  createAuthor,
} = require("../../controllers/authors.controller");

// peticiones de /api/authors
const router = require("express").Router();

router.get("/", getAll);
router.post("/", createAuthor);

module.exports = router;
