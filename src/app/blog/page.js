"use client";

import React, { useState } from "react";
import useReactQuearyGetApi from "@/hooks/useReactQuearyGetApi";
import { fetchAllBlogs } from "@/service/blogService";
import { Button, Modal } from "react-bootstrap";

const BlogPage = () => {
   const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);


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

      <Button variant="primary" onClick={handleOpen}>New blods</Button>
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


          {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => alert("Blog Saved!")}>
            Save Blog
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BlogPage;
