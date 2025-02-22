"use client"
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", location: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Side - Contact Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-start p-4">
          <div className="mb-3 d-flex align-items-center">
            <FaPhoneAlt style={{color:'red'}} size={20} className="me-2" />
            <div>
              <h5 className="mb-1" style={{color:'red'}}>Phone Number</h5>
              <p className="mb-0">+91 9848454532</p>
            </div>
          </div>
          <br/>
          <div className="mb-3 d-flex align-items-center">
            <FaEnvelope size={20} style={{color:'red'}} className="me-2" />
            <div>
              <h5 className="mb-1" style={{color:'red'}}>Email Address</h5>
              <p className="mb-0">info@vivacesonics.com</p>
            </div>
          </div>
          <br/>
          <div className="d-flex align-items-center">
            <FaMapMarkerAlt size={20} style={{color:'red'}} className="me-2" />
            <div>
              <h5 style={{color:'red'}} className="mb-1">Head Office</h5>
              <p className="mb-0">Ho.no.1-3-80/1, Street No.6, Habsiguda, Hyderabad-500007</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 p-4">
          <h4 className="mb-4 text-center" style={{color:'red'}}>Get in Touch</h4>
          <form onSubmit={handleSubmit} className="p-4 shadow rounded" style={{ border: "1px solid #ddd" }}>
            <div className="mb-3 d-flex align-items-center border rounded p-2">
              <FaUser className="me-2" />
              <input type="text" name="name" placeholder="Your Name" className="form-control border-0" onChange={handleChange} required />
            </div>
            <div className="mb-3 d-flex align-items-center border rounded p-2">
              <FaMobileAlt className="me-2" />
              <input type="tel" name="mobile" placeholder="Your Mobile Number" className="form-control border-0" onChange={handleChange} required />
            </div>
            <div className="mb-3 d-flex align-items-center border rounded p-2">
              <FaEnvelope className="me-2" />
              <input type="email" name="email" placeholder="Your Email" className="form-control border-0" onChange={handleChange} required />
            </div>
            <div className="mb-3 d-flex align-items-center border rounded p-2">
              <FaMapMarkerAlt className="me-2" />
              <input type="text" name="location" placeholder="Your Location" className="form-control border-0" onChange={handleChange} required />
            </div>
            <button type="submit" className="btn text-white w-100" style={{ backgroundColor: "red" }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs