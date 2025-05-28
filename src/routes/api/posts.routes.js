const {
  selectAll,
  selectByAuthorId,
  create,
} = require("../../controllers/posts.controller");

const router = require("express").Router();

router.get("/", selectAll);
router.get("/author/:authorId", selectByAuthorId);
router.post("/", create);

module.exports = router;
