const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const Comment = require("../models/comment");
const isTokenValid = require("../middleware/isTokenValid");
const mongoose = require("mongoose");

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

router.post("/", isTokenValid, async (req, res, next) => {
  try {
    const author = new mongoose.Types.ObjectId(req.payload.sub);
    const { title, body, isPublished, imageUrl } = req.body;

    const post = new Post({
      title,
      body,
      author,
      isPublished,
      imageUrl,
    });

    await post.save();
    return res.json({
      success: true,
      message: "Post uploaded to database",
      post,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Failed to upload post",
      error: err,
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

router.post("/:postId", isTokenValid, async (req, res, next) => {
  try {
    const author = new mongoose.Types.ObjectId(req.body.authorId);

    // Post update form input names - body, title, authorId, isPublished, iamgeUrl
    const post = await Post.findById(req.params.postId);
    post.title = req.body.title;
    post.body = req.body.body;
    post.author = author;
    post.isPublished = req.body.isPublished;
    post.imageUrl = req.body.imageUrl;

    await post.save();
    const updatedPost = await Post.findById(req.params.postId).populate(
      "author",
      "name"
    );

    res.json({
      success: true,
      message: "Successfully updated post",
      post: updatedPost,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Failed to update post",
      error: err,
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

router.post("/:postId/comments", async (req, res, next) => {
  try {
    const { body, author } = req.body;
    const comment = new Comment({
      body,
      author,
      post: req.params.postId,
    });

    await comment.save();

    return res.json({
      success: true,
      message: "Comment added",
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Failed to upload comment",
      error: err,
    });
  }
});

module.exports = router;
