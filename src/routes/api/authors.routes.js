const { getAll, create } = require("../../controllers/authors.controller");

// peticiones de /api/authors
const router = require("express").Router();

router.get("", getAll);
router.post("", create);

module.exports = router;
