import React from 'react'
import Image from 'next/image'
import image6 from '../../../asserts/soluctions/6.webp' // Update path as needed
import hoverImage6 from '../../../asserts/soluctions/3h.webp'

// ✅ SEO Metadata 
export const metadata = {
  title: "Tube to Sheet Weld Inspection System",
  description:
    "Customized ultrasonic immersion inspection system for evaluating tube-to-sheet welded joints with automated ID and OD scanners. Real-time A and B-scan imaging, automated defect analysis, and optimized signal processing included.",
  keywords:
    "tube to sheet weld inspection, ultrasonic testing, ID scanner, OD scanner, real-time A-scan, B-scan, signal processing, defect length measurement, weld inspection system",
  openGraph: {
    title: "Tube to Sheet Weld Inspection System",
    description:
      "Automated ultrasonic inspection system with ID/OD scanners and real-time scan imaging for tube-to-sheet welded joints.",
    images: [
      {
        url: "/assets/image6.jpg",
        width: 1200,
        height: 630,
        alt: "Tube to Sheet Weld Inspection System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Tube to Sheet Weld Inspection System
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Confidential
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image6}
            alt="Tube to Sheet Weld Inspection System"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This is a <strong>customized ultrasonic immersion inspection system</strong> designed specifically for evaluating 
            <strong> tube-to-sheet welded joints</strong>.
          </p>
          <p>
            It includes an <strong>automated ID scanner</strong>, <strong>OD scanner</strong>, and supports other weld 
            configurations with real-time <strong>A-scan and B-scan imaging</strong>.
          </p>
          <p>
            Advanced <strong>signal processing techniques</strong> have been optimized to automate defect detection, measurement of 
            defect length, and defect count — ensuring accurate, repeatable results.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage6}
          alt="Tube Sheet Weld Hover Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
