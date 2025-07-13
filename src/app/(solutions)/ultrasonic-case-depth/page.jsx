import React from 'react'
import Image from 'next/image'
import image1 from '@/asserts/soluctions/1.webp' // Adjust path if needed
import hoverImage1 from '@/asserts/soluctions/1h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "Automated Ultrasonic Case Depth Measurement System | Kirloskar Oil Engines",
  description:
    "An ultrasonic case depth measurement system using backscatter signals from induction hardened crank shafts. Supports fillet corner inspection and continuous case depth evaluation with advanced signal processing.",
  keywords:
    "ultrasonic case depth, crankshaft inspection, induction hardened shaft, martensite, ferrite-pearlite, ultrasonic backscatter, fillet corner inspection, Kirloskar Oil Engines",
  openGraph: {
    title: "Automated Ultrasonic Case Depth Measurement System",
    description:
      "Ultrasonic system for continuous case depth inspection of crankshafts using dual transducers and backscatter signal analysis.",
    images: [
      {
        url: "/assets/image1.jpg",
        width: 1200,
        height: 630,
        alt: "Ultrasonic Case Depth Measurement System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Automated Ultrasonic Case Depth Measurement System
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Kirloskar Oil Engines Ltd.
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image1}
            alt="Case Depth Measurement System"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This ultrasonic system measures <strong>case depth in induction-hardened crankshafts</strong> by analyzing
            <strong> backscattered ultrasonic signals</strong>.
          </p>
          <p>
            It utilizes a set of <strong>two transducers</strong> to cover larger crankshaft sections and supports accurate
            case depth measurement even at <strong>fillet corners</strong>.
          </p>
          <p>
            The system enables <strong>continuous monitoring along the circumference</strong> and uses
            <strong> advanced signal processing</strong> to differentiate between <strong>martensite to ferrite-pearlite</strong>
            and <strong>martensite to martensite</strong> transitions in the grain structure.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage1}
          alt="Case Depth Measurement Hover Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
