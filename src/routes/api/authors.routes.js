const {
  getAll,
  createAuthor,
  getById,
} = require("../../controllers/authors.controller");

// peticiones de /api/authors
const router = require("express").Router();

router.get("/", getAll);
router.get("/:authorId", getById);
router.post("/", createAuthor);

module.exports = router;
