import Image from "next/image";
import { Container } from "postcss";
import { Carousel, CarouselCaption, Col, Row } from "react-bootstrap";
import ContactUs from "./Compoents/ContactUs";
import SlickSlider from "./Compoents/SlickSlider";
import Baners from "./Compoents/Baners";
import Solution from "./Compoents/Solution";

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
       <Solution />
    </div>




    {/* clients */}
    <div id="clients" className="container my-5">
    <SlickSlider />
    </div>


     {/* contact us */}
     <div id="contact" className="container my-5">
     <ContactUs />
     </div>
    </div>
  );
}
