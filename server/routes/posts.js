const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const Comment = require("../models/comment");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("author", "name");
    if (posts.length === 0) {
      return res.json({
        success: true,
        message: "There are no posts",
        posts: null,
      });
    }
    return res.json({
      success: true,
      message: "Posts retrieved from database",
      posts,
    });
  } catch {
    return res.json({
      success: false,
      message: "Failed to retrieve posts",
    });
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId).populate(
      "author",
      "name"
    );
    if (!post) {
      return res.json({
        success: false,
        message: "No post with given post ID",
      });
    }
    return res.json({
      success: true,
      message: "Successfully retrieved post",
      post,
    });
  } catch {
    return res.json({
      success: false,
      message: "Invalid post ID",
    });
  }
});

router.get("/:postId/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).sort({
      createdAt: -1,
    });

    if (comments.length === 0) {
      return res.json({
        success: true,
        message: "No comments for this post",
        comments: null,
      });
    }

    return res.json({
      success: true,
      message: "Successfully retrieved comments",
      comments,
    });
  } catch {
    return res.json({
      success: false,
      message: "Invalid post ID",
    });
  }
});

module.exports = router;
