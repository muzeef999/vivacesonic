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
    description: "An ultrasonic Case depth Measurement system, this works on measuring back scattered signals from an induction hardened crank shaft. It uses s set of two transducers to cover a larger section of the part, and also has provision to measure case depth at the fillet corners.",
    image: image1,
  },
  {
    title: "A multi-Axis Ultrasonic Inspection System for Composite Shells",
    client: "L & T Defense, Coimbatore",
    description: "The system presents the inspection results in a C-Scan image, which the user can easily perform the task of interpretations, and measurements of defect parameters like length, location, area etc. ",
    image: image2,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description: "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image3,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description: "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image4,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description: "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image5,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description: "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image6,
  },
  {
    title: "A large area Flat Bed Scanner for Aero-Space Composite",
    client: "Tata Lockheed Martine Aero-structures Ltd. , Hyd",
    description: "Totally designed and manufactured by us for an export oriented AeroSpace Company. This has a Span of inspection of 4 meters X 3 meters and used for inspection and further exports of the parts. A typical C-Scan ",
    image: image7,
  },
];

const Solution = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Our Solutions</h2>
      <div className="row g-4">
        {solutions.map((solution, index) => (
          <div key={index} className="col-md-4 d-flex align-items-stretch">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <Image src={solution.image} alt={solution.title} layout="responsive" priority className="card-img-top" />
              <div className="card-body text-start p-4">
                <h5 className="card-title fw-bold">{solution.title}</h5>
                <p className="text-muted"><b>Client:</b> {solution.client}</p>
                <p className="card-text">{solution.description}</p>
              </div>
              <div className="card-footer bg-white border-0 text-center py-3">
                <button className="btn btn-primary btn-sm px-4">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
