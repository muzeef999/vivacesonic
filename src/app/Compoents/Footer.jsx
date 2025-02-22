import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/style/Footer.css"
import Image from "next/image";
import logo from "@/asserts/logo.png"

const Footer = () => {
  return (
 <div>
  <hr/>
 
    <footer className="footer-containe py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 text-center text-md-start">
            <div style={{width:'30%', height:'auto'}}>
            <Image src={logo} layout="responsive" priority alt="Company Logo" className="logo mb-2" />
            </div>
            <p>
              Our mission is to diversify and utilize new and emerging
              technologies to enhance business operations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-start">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#"  style={{textDecoration:'none' , color:'#000'}}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" style={{textDecoration:'none', color:'#000'}}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{textDecoration:'none', color:'#000'}}>
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" style={{textDecoration:'none', color:'#000'}}>
                  Clients
                </a>
              </li>
              <li>
                <a href="#" style={{textDecoration:'none', color:'#000'}}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 text-start">
            <h4>Address</h4>
            <p>Ho.no.1-3-80/1, Street No.6, Habsiguda, Hyderabad-500007</p>
            <p>Email: info@vivacesonics.com</p>
            <p>Phone: +91 98484 54532</p>
            <div className="social-icons d-flex justify-content-center justify-content-md-end">
              <a href="#" className=" mx-2" style={{color:'red'}}>
                <FaTwitter />
              </a>
              <a href="#" className=" mx-2" style={{color:'red'}}>
                <FaFacebook />
              </a>
              <a href="#" className=" mx-2" style={{color:'red'}}>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4 text-center">
          <div className="col">
            <p className="mb-0">2024 &copy; All Rights Reserved.</p>
            <div className="policy-links">
              <a href="#" className="mx-2" style={{color:'#000'}}>
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="mx-2" style={{color:'#000'}}>
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <button className="scroll-to-top btn btn-danger">
          <FaArrowUp />
        </button>
        <button className="whatsapp-icon btn btn-success">
          <FaWhatsapp />
        </button>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
