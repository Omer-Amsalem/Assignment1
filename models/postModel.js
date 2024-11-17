import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Post", postSchema);
