"use client";

import { useMutation } from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { createBlog } from '../service/blogService';
import { toast } from 'sonner';

// Disable SSR for ReactQuill
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PostBlog = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "Checking the data",
    author: "",
    tags: "",
    image: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
  });

  // Ensure hydration-safe behavior
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleQuillChange = (value) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     content: value,
  //   }));
  // };

  const { mutate, isLoading, error } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      toast.success("Blog posted successfully ✅");
    },
    onError: () => {
      toast.error("Invalid blog data ❌");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      keywords: formData.keywords.split(",").map((word) => word.trim()),
    };

    mutate(payload);
  };

  if (!hasMounted) return null; // ⛔️ Prevents mismatch during SSR

  return (
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

        {/* <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={handleQuillChange}
          className="mb-3"
        /> */}

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
          {isLoading ? "Posting..." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default PostBlog;
