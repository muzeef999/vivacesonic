import Image from "next/image";
import { Container } from "postcss";
import { Carousel, CarouselCaption, Col, Row } from "react-bootstrap";
import ContactUs from "./Compoents/ContactUs";
import SlickSlider from "./Compoents/SlickSlider";
import Baners from "./Compoents/Baners";

export default function Home() {
  return (
    <div>
         

         <Baners/>


   
    <div className="container" id="about" >
        <div className="row">
          <div className="col-md-6" >
            <h2>About Us</h2>
            <p>
              We are a two-decade-old company providing reliable and customized automated ultrasonic testing machines for multiple industries.
            </p>
          </div>
          <div className="col-md-6">
            {/* <img src="/about-us.jpg" alt="About Us" className="img-fluid" /> */}
          </div>
        </div>
      </div>


      {/* solution  */}

      <div id="solutions" className="container my-5">
      <h2 className="text-center mb-4">Our Solutions</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="/solution1.jpg" className="card-img-top" alt="Automated Ultrasonic Systems" />
            <div className="card-body">
              <h5 className="card-title">Automated Ultrasonic Systems</h5>
              <p className="card-text">Advanced NDT systems with high-speed multi-channel ultrasonic testing.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/solution2.jpg" className="card-img-top" alt="Portable Testing Solutions" />
            <div className="card-body">
              <h5 className="card-title">Portable Testing Solutions</h5>
              <p className="card-text">Handheld and easy-to-use ultrasonic testing devices.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/solution3.jpg" className="card-img-top" alt="Composite Testing Systems" />
            <div className="card-body">
              <h5 className="card-title">Composite Testing Systems</h5>
              <p className="card-text">Custom solutions for defense, aerospace, and nuclear industries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>




    {/* clients */}
    <SlickSlider />


     {/* contact us */}
     <ContactUs />
    </div>
  );
}
