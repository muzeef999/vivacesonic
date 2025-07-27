"use client";

import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaUser } from "react-icons/fa";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef(null);
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

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_fr5vlkj", // ✅ Your EmailJS Service ID
        "template_xw38w1m", // ✅ Your EmailJS Template ID
        formRef.current,
        "Aseeo35nOx3kpMzMJ"  // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("✅ Email sent successfully!", result.text);
          formRef.current.reset();
        },
        (error) => {
          toast.error("❌ Failed to send email. Try again.", error);
          
        }
      );
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-4 shadow rounded"
        style={{ border: "1px solid #ddd" }}
      >
        {/* Name */}
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

        {/* Email */}
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

        {/* Message */}
        <div className="mb-3 d-flex align-items-start border rounded p-2">
          <FaMapMarkerAlt className="me-2 mt-1" />
          <textarea
            name="location"
            placeholder="Describe your problem"
            className="form-control border-0"
            onChange={handleChange}
            required
            rows={5}
          ></textarea>
        </div>

        {/* Submit */}
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
