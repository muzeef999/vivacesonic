"use client"
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaMobileAlt } from "react-icons/fa";
import Form from "./Form";

const ContactUs = () => {

  return (
    <div className="container py-5">
       <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
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
         <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactUs