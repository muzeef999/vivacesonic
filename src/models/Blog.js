// /models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    default: "Anonymous",
  },

  tags: {
    type: [String],
    default: [],
  },

  image: {
    type: String,
    default: "", // blog thumbnail or cover image
  },

  // ✅ SEO-specific fields
  metaTitle: {
    type: String,
    trim: true,
    default: "", // for <title> tag
  },

  metaDescription: {
    type: String,
    trim: true,
    default: "", // for <meta name="description">
  },

  keywords: {
    type: [String], // for <meta name="keywords">
    default: [],
  }
}, {
  timestamps: true, // adds createdAt and updatedAt
});

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
