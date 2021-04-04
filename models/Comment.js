import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  test: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
