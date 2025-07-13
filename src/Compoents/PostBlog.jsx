"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react'

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


const PostBlog = () => {

const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "Anonymous",
    tags: "",
    image: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title: formData.title,
      content: formData.content,
      author: formData.author || "Anonymous",
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      image: formData.image,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      keywords: formData.keywords.split(",").map((word) => word.trim()),
    };

    try {
      const res = await axios.post("/api/blogs", body); // adjust endpoint as needed
      alert("Blog posted successfully!");
    } catch (err) {
      console.error("Blog post failed:", err);
      alert("Failed to post blog");
    }
  };


  return (
    <>

    <div className="container py-4">
      <h2 className="mb-4">Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-3"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={handleQuillChange}
          className="mb-3"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          className="form-control mb-3"
          value={formData.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="form-control mb-3"
          value={formData.tags}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="form-control mb-3"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          className="form-control mb-3"
          value={formData.metaTitle}
          onChange={handleChange}
        />

        <textarea
          name="metaDescription"
          placeholder="Meta Description"
          className="form-control mb-3"
          rows={3}
          value={formData.metaDescription}
          onChange={handleChange}
        />

        <input
          type="text"
          name="keywords"
          placeholder="Keywords (comma separated)"
          className="form-control mb-3"
          value={formData.keywords}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary w-100">
          Submit Blog
        </button>
      </form>
    </div>

    </>
  )
}

export default PostBlog