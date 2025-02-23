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
            <div style={{width:'60%', height:'auto'}}>
            <svg width="100%" height="auto" viewBox="0 0 353 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 9C0 9 214 166 218 169C222 172 227 174 233 174C239 174 243 171 245 169C247 167 353 34 353 34L295.5 33.5L241.5 101.5C241.5 101.5 231.5 114.5 217.5 104.5C189.02 84.16 99.5 9.5 99.5 9.5L0 9Z" fill="#FF3329"/>
<path d="M186.496 8.5L154.496 48.5C153.206 50.65 151.076 53.83 153.496 56.5C155.086 58.25 158.616 60 162.496 60.5C176.616 62.33 180.496 62.5 186.496 59.5C192.496 56.5 198.696 50.82 198.496 50.5L212.496 34.5L229.496 15.5C239.496 6.5 256.496 6.5 280.496 6.5C297.586 6.5 321.626 7.63 335.996 22C343.276 29.28 341.756 34.42 341.996 36C341.996 36 342.176 38.05 340.586 41.03C338.996 44.01 306.996 85 306.996 85L267.496 84.5C267.496 84.5 301.386 41.16 302.496 39.5C304.496 36.5 302.016 33.49 300.496 32.5C297.476 30.53 293.706 27.24 277.496 26.5C262.556 25.81 260.626 28.61 259.496 29.5C259.496 29.5 240.506 52.49 240.496 52.5L230.496 64.5C226.496 69.5 214.496 78.5 200.496 82.5C181.756 87.85 158.656 86.9 144.496 83.5C130.606 80.17 119.726 70.19 117.496 64.5C112.426 51.56 118.536 42.93 119.496 41.5L125.496 33.5L150.996 2" fill="white"/>
<path d="M186.496 8.5L154.496 48.5C153.206 50.65 151.076 53.83 153.496 56.5C155.086 58.25 158.616 60 162.496 60.5C176.616 62.33 180.496 62.5 186.496 59.5C192.496 56.5 198.696 50.82 198.496 50.5L212.496 34.5L229.496 15.5C239.496 6.5 256.496 6.5 280.496 6.5C297.586 6.5 321.626 7.63 335.996 22C343.276 29.28 341.756 34.42 341.996 36C341.996 36 342.176 38.05 340.586 41.03C338.996 44.01 306.996 85 306.996 85L267.496 84.5C267.496 84.5 301.386 41.16 302.496 39.5C304.496 36.5 302.016 33.49 300.496 32.5C297.476 30.53 293.706 27.24 277.496 26.5C262.556 25.81 260.626 28.61 259.496 29.5C259.496 29.5 240.506 52.49 240.496 52.5L230.496 64.5C226.496 69.5 214.496 78.5 200.496 82.5C181.756 87.85 158.656 86.9 144.496 83.5C130.606 80.17 119.726 70.19 117.496 64.5C112.426 51.56 118.536 42.93 119.496 41.5L125.496 33.5L150.996 2" stroke="#FF3329" strokeWidth="5" strokeMiterlimit="10"/>
</svg>
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
