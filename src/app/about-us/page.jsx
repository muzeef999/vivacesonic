import Image from 'next/image'
import React from 'react'
import founder from "../../asserts/founder.webp";

export const metadata = {
  title: "About Us | Vilas Gopal Kulkarni - Ultrasonic Automation Expert",
  description:
    "Discover the journey of Vilas Gopal Kulkarni, a pioneer in ultrasonic automation solutions in India. With five decades of experience in aerospace, defence, and commercial ultrasonic applications.",
  keywords:
    "Vilas Gopal Kulkarni, ultrasonic automation, ECIL, aerospace ultrasonic, defence ultrasonic, ultrasonic solutions India, material evaluation, fused bonding, case depth analysis",
};

const page = () => {
  return (
    <div className="container my-5">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div>
                  <h2>Vilas Gopal Kulkarni</h2>
                  <p>
                    <strong>Education:</strong> NIT Suratkal (KREC), BE - ECE, 1975
                  </p>
                  <p>
                    <strong>Incorporation Date:</strong> 1986
                  </p>
                  <p>
                    With a career in{" "}
                    <strong>Ultrasonics design and instrumentation</strong> since
                    1976, Vilas Gopal Kulkarni initially worked at{" "}
                    <strong>ECIL</strong> before establishing his own company in
                    1986.
                  </p>
                  <p>
                    With <strong>five decades</strong> of expertise, the company has
                    been delivering{" "}
                    <strong>one-of-a-kind automation solutions</strong> in{" "}
                    <strong>Ultrasonic Products</strong> for{" "}
                    <strong>Aerospace, Defence, and Commercial Applications</strong>
                    .
                  </p>
                  <ul>
                    <li>
                      Pioneering{" "}
                      <strong>global-level automated ultrasonic solutions</strong>{" "}
                      in India for multiple decades.
                    </li>
                    <li>Material evaluation for composites</li>
                    <li>Fused bonding of metals</li>
                    <li>Case depth analysis of hardened steel</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6  order-0 order-md-1 justify-content-center align-items-center">
                <div>
                  <center>
                    <div style={{ width: "60%" }}>
                      <Image
                        src={founder}
                        alt="founder Image"
                        layout="responsive"
                        priority
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                    <div></div>
                  </center>
                </div>
              </div>
            </div>
          </div>
  )
}

export default page