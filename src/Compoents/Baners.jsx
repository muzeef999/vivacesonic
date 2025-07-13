import React from "react";
import "@/style/Banner.css";
import Form from "./Form";

const Baners = () => {
  return (
    <div className="home1 container-fluid d-flex">
      <div className="container">
        <div className="container-data">
          <div className="container">
            <div className="min-vh-100 d-flex justify-content-center align-items-center text-center">
              
                <div className="first-col-text" style={{ zIndex: 9 }}>
                  <p className="banner0">
                    WELCOME TO{" "}
                    <span className="banner4" style={{ color: "red" }}>
                      VIVACE SONICs
                    </span>
                  </p>
                  <p className="banner1">
                    We Design & Build Custom Solutions for Unique Challenges.
                  </p>
                  <p className="banner2">
                    Our commitment to excellence drives us to prioritize
                    quality, affordability, and timely project delivery. By
                    consistently delivering value, we ensure customer
                    satisfaction and build lasting trust through positive
                    feedback.
                  </p>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 sideGif"></div>
    </div>
  );
};

export default Baners;
