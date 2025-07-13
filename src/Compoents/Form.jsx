"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaUser,
} from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded"
        style={{ border: "1px solid #ddd" }}
      >
        <div className="mb-3 d-flex align-items-center border rounded p-2">
          <FaUser className="me-2" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-control border-0"
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="mb-3 d-flex align-items-center border rounded p-2">
          <FaEnvelope className="me-2" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-control border-0"
            onChange={handleChange}
            required
          />
        </div>
      
        <div className="mb-3 d-flex align-items-center border rounded p-2">
          <textarea
            name="location"
            placeholder="Describe your problem"
            className="form-control border-0"
            onChange={handleChange}
            required
            rows="6"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn text-white w-100"
          style={{ backgroundColor: "red" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
