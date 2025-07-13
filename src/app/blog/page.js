"use client";

import React from "react";
import useReactQuearyGetApi from "@/hooks/useReactQuearyGetApi";
import { fetchAllBlogs } from "@/service/blogService";

const BlogPage = () => {
  const { data, isLoading, error } = useReactQuearyGetApi({
    queryFn: fetchAllBlogs,
    queryKey: ["blogs"],
  });

  if (isLoading)
    return <p className="text-center mt-5 fw-bold">Loading blogs...</p>;
  if (error)
    return <p className="text-danger text-center mt-5">Failed to load blogs</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold display-6">📚 Latest Blogs</h2>
      <div className="row g-4">
        {data?.blogs?.map((blog) => (
          <div className="col-12 col-md-6 col-lg-4" key={blog._id}>
            <div className="card h-100 shadow-sm border-0 hover-shadow transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-2">
                  <span className="badge bg-primary">{blog.tags?.[0] || "General"}</span>
                  <small className="text-muted">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </small>
                </div>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                  {blog.metaDescription?.slice(0, 100)}...
                </p>
                <div className="text-end text-muted mt-auto">
                  <small>👤 {blog.author}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
