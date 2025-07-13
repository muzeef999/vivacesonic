import React from 'react'
import Image from 'next/image'
import image10 from '@/asserts/soluctions/10.webp' // Adjust the path based on your structure
import hoverImage10 from '@/asserts/soluctions/10h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "Rotating Head Ultrasonic Bar/Tube Testing System",
  description:
    "High-speed rotating head with multi-channel ultrasonic data acquisition and digital signal processing for real-time inspection of bars and tubes. Includes transducer inspection, paint marking, recording, and reporting.",
  keywords:
    "rotating head ultrasonic, bar testing system, tube testing system, multi-channel ultrasonic, paint marking, ultrasonic inspection chart, transducer configuration, non-destructive testing",
  openGraph: {
    title: "Rotating Head Ultrasonic Bar/Tube Testing System",
    description:
      "Complete ultrasonic bar and tube testing system with rotating head, real-time inspection charts, and paint marking.",
    images: [
      {
        url: "/assets/image10.jpg",
        width: 1200,
        height: 630,
        alt: "Ultrasonic Rotating Head Tube Testing System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Rotating Head Ultrasonic Bar/Tube Testing System
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Confidential
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image10}
            alt="Rotating Head Bar Tube Testing System"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This system features a <strong>high-speed rotating head</strong> with a <strong>multi-channel real-time ultrasonic 
            data acquisition</strong> and digital processing unit.
          </p>
          <p>
            It provides a real-time inspection chart from the configured transducer for continuous quality monitoring.
          </p>
          <p>
            Designed for <strong>bar and tube inspection</strong>, it supports single or multiple transducer modes,
            real-time inspection, <strong>recording, paint marking</strong>, and automatic <strong>report generation</strong> —
            making it a complete and automated inspection solution.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage10}
          alt="Rotating Head Inspection Hover Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
