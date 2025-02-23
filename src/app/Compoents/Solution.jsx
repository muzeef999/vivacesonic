import React from "react";
import Image from "next/image";
import image1 from "@/asserts/soluctions/1.png";
import image2 from "@/asserts/soluctions/2.png";
import image3 from "@/asserts/soluctions/3.png";
import image4 from "@/asserts/soluctions/4.png";
import image5 from "@/asserts/soluctions/5.png";
import image6 from "@/asserts/soluctions/6.png";
import image7 from "@/asserts/soluctions/7.png";

const solutions = [
  {
    title: "Automated Ultrasonic Case Depth Measurement System",
    client: "Kirloskar Oil Engines Ltd.",
    description:
 "An ultrasonic Case depth Measurement system, this works on measuring back scattered signals from an induction hardened crank shaft. It uses s set of two transducers to cover a larger section of the part, and also has provision to measure case depth at the fillet corners \n A similar case depth measurement system is supplied to Tata Motors at their Pune, & Sanand Plant.",
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
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description:
      "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image3,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description:
      "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image4,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description:
      "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image5,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description:
      "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image6,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description:
      "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image7,
  },
];

const Solution = () => {
  return (
    <div className="container py-5">
    <h2 className="text-center mb-5 fw-bold">Our Solutions</h2>
    <br/>
    <div className="row g-5">

      {solutions.map((solution, index) => (
        <div key={index} className="row align-items-center">
          {/* Alternating Layout */}
          {index % 2 === 0 ? (
            <>
              {/* Left Side - Image */}
              <div className="col-md-6">
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
                  <button className="btn btn-primary btn-sm">Learn More</button>
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
                  <button className="btn btn-primary btn-sm">Learn More</button>
                </div>
              </div>
              {/* Right Side - Image */}
              <div className="col-md-6">
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
      <br/>
    </div>
  </div>
  );
};

export default Solution;
