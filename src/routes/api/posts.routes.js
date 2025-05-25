const { getAll } = require("../../controllers/posts.controller");

const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
