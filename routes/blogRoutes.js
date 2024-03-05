const express = require("express");
const {
  handleCreateBlog,
  handleShowAllBlogs,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/createBlog").post(handleCreateBlog);
router.route("/blog").get(handleShowAllBlogs);

module.exports = router;
