const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    isPublished: { type: Boolean, default: false },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
