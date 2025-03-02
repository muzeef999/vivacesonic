import React from "react";
import Image from "next/image";
import image1 from "@/asserts/soluctions/1.webp";
import image2 from "@/asserts/soluctions/2.webp";
import image3 from "@/asserts/soluctions/3.webp";
import image4 from "@/asserts/soluctions/4.webp";
import image5 from "@/asserts/soluctions/5.webp";
import image6 from "@/asserts/soluctions/6.webp";
import image7 from "@/asserts/soluctions/7.webp";
import { FaYoutube } from "react-icons/fa";

const solutions = [
  {
    title: "Automated Ultrasonic Case Depth Measurement System",
    client: "Kirloskar Oil Engines Ltd.",
    description:
   "An ultrasonic Case depth Measurement system, this works on measuring back scattered signals from an induction hardened crank shaft. It uses s set of two transducers to cover a larger section of the part, and also has provision to measure case depth at the fillet corners a continuous monitoring of case depth along the circumference is recorded and displayed.Case depth measurement for martisite to ferrite-pearlite grain structures as well as martinsite to martinsite grain structures in induction case hardened crank shafts have been evaluated and measured with an advanced signal processing techniques adopted on back scattered ultrasonic signals",
    image: image1,
  },
  {
    title: "A multi-Axis Ultrasonic Inspection System for Composite Shells",
    client: "L & T Defense, Coimbatore",
    description:
      "This system was custom designed for use with Dry Coupled Ultrasonic Probes . The probes were designed and manufacture by us. The system presents the inspection results in a C-Scan image, which the user can easily perform the task of interpretations, and measurements of defect parameters like length, location, area etc.",
    image: image2,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Aerospace Domain.",
    description:
      "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and uses pulse through transmission method. A real-time A-Scan and C-Scan images are generated and recorded for offline analysis. User specific reports are generated for acceptance of inspected parts.",
    image: image3,
  },
  {
    title: "A Portable C-Scan Machine for Honeycomb Panels with Dry Coupling Probes",
    client: "Dynamitic Technologies, Bangalore with Dry Contact Manual Probes",
    description:
      "Portable machine for inspection of Honey comb panels of Aluminum and Carbon based materials. The system has provision for generating C-Scan images by manual movement of a set of through transmission dry coupling probes.",
    image: image4,
  },
  {
    title: "A Four axis Immersion Testing System for Evaluation of dis similar metal Fusion Joints",
    client: "",
    description:
   "For utrasonic evaluation of the bonding between dis similar materials using high frequency focussed transducers the results are presented in real time A and C-scan along with total capture of data. Further analysis and measurement on data is performed to comprehensively evaluate the bond strength with the aid of A, B and C-scan imaging presentation and analysis.",
    image: image5,
  },
  {
    title: "A Tube to Sheet Weld Inspection System",
    client: "",
    description:
      "A customized immersion inspection system for evaluation of tube to sheet welded joints with automated ID scanner, OD scanner and other weld configurations has been implemented. The user is provided with a real time A and B scan images with an optimised adaptation of signal processig techniques. Defect evaluation is automated and optimized to measure length and count of defects.",
    image: image6,
  },
  {
    title: "A fully Automated Ultrasonic Inspection System for Missile Motor Casing with Two sets of Inspection modes i.e. Pulse Echo , and Through Transmission.",
    client: "Economical Explosives Ltd",
    description:
     "Dual mode automated ultrasonic inspection system that employs pulse echo mode for inspection of tube to rubber bonding and a dry coupled roller probe arrangeemnt for inspection of rubber to rubber bonding at both ends of the tube. Real time data in A and C-scan format is stored and is available for further anaysis and evaluaton of the inspected parts. The reports are genearated in end-user defined format with traceabilty of inspection parameters along with component identifcation.",
    image: image7,
  },


  {
    title: "ULTRASONIC IMMERSION TESTING SYSTEM FOR INSAT TANKS.",
    client: "",
    description:
    "An ultrasonic immersion testing system for the inspection of electron-beam welded joints was fully designed, manufactured, and installed. The system is fully automated with precision system mechanics, including vacuum-assisted tank holders.",
    image: image7,
  },

  {
    title: "ULTRASONIC IMMERSION TESTING SYSTEM FOR INSAT COMPONENTS",
    client: "",
    description:
   `An ultrasonic immersion testing system for the inspection of INSAT components like shells, gas ports, rings, etc. The system was fully designed, manufactured, and installed.

The above systems were designed using 5-axis mechanics, fully automated transducer manipulators for transmitting and receiving a 15 MHz ultrasonic focused beam for the detection and mapping of defects.

An indigenous product in the year 1995-96.`,
    image: image7,
  },
];

const Solution = () => {

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Our Solutions</h2>
      <br />
      <div className="row g-5">
        {solutions.map((solution, index) => (
          <div key={index} className="row align-items-center mb-5">
            {/* Alternating Layout */}
            {index % 2 === 0 ? (
              <>
                {/* Left Side - Image */}
                <div className="col-md-6 order-1 order-md-0">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    layout="responsive"
                    priority
                    className="img-fluid rounded-4 shadow-lg"
                  />
                </div>
                {/* Right Side - Content */}
                <div className="col-md-6">
                  <div className="p-4">
                    <h5 className="fw-bold">{solution.title}</h5>
                    <p className="text-muted">
                      <b>Client:</b> {solution.client}
                    </p>
                    <p>{solution.description}</p>
                    <button
                      className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                      
                    >
                      <FaYoutube size={16} />
                      Watch on YouTube
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
          
                {/* Left Side - Content */}
                <div className="col-md-6">
                  <div className="p-4">
                    <h5 className="fw-bold">{solution.title}</h5>
                    <p className="text-muted">
                      <b>Client:</b> {solution.client}
                    </p>
                    <p>{solution.description}</p>
                    <button
                      className="btn btn-danger btn-sm d-flex align-items-center gap-2"
                      
                    >
                      <FaYoutube size={16} />
                      Watch on YouTube
                    </button>
                  </div>
                </div>
                {/* Right Side - Image */}
                <div className="col-md-6 order-0 order-md-1">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    layout="responsive"
                    priority
                    className="img-fluid rounded-4 shadow-lg"
                  />
                </div>
              </>
            )}
          </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default Solution;
