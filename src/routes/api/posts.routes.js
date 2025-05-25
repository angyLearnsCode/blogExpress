const {
  getAll,
  getByAuthorId,
  createPost,
} = require("../../controllers/posts.controller");

const router = require("express").Router();

router.get("/", getAll);
router.get("/author/:authorId", getByAuthorId);
router.post("/", createPost);

module.exports = router;
