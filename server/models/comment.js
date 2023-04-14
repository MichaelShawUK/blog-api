const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: { type: String, trim: true, maxLength: 200 },
  author: { type: String, trim: true, maxLength: 20 },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  time: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Comment", CommentSchema);
