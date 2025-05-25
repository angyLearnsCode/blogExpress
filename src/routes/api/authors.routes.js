const {
  getAll,
  create,
  edit,
  getById,
} = require("../../controllers/authors.controller");

// peticiones de /api/authors
const router = require("express").Router();

router.get("/", getAll);
router.get("/:authorId", getById);
router.post("/", create);
router.put("/", edit);

module.exports = router;
