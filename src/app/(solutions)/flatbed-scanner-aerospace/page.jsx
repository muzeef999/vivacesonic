// app/projects/flat-bed-scanner/page.jsx

import React from 'react'
import Image from 'next/image'
import image3 from '@/asserts/soluctions/3.webp'         // Update path if needed
import hoverImage3 from '@/asserts/soluctions/3h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "A Large Area Flat Bed Scanner for Aerospace Composite | Aerospace Domain",
  description:
    "Designed and manufactured for an export-oriented aerospace company. Covers 4m x 3m inspection area using pulse through transmission. Real-time A and C-scan imaging with offline analysis and custom reporting.",
  keywords:
    "flat bed scanner, aerospace composite inspection, ultrasonic testing, A-scan, C-scan, aerospace NDT, pulse transmission, NDT automation",
  openGraph: {
    title: "Flat Bed Scanner for Aerospace Composite",
    description:
      "Real-time A and C-scan inspection system for large aerospace composite components with offline analysis and custom reporting.",
    images: [
      {
        url: "/assets/image3.jpg", // or actual CDN path if hosted externally
        width: 1200,
        height: 630,
        alt: "Flat Bed Scanner Aerospace",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        A Large Area Flat Bed Scanner for Aerospace Composite
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Aerospace Domain
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image3}
            alt="Flat Bed Scanner for Aerospace Composite"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            Totally designed and manufactured by us for an export-oriented Aerospace company.
            This advanced system supports a span of inspection of <strong>4 meters × 3 meters</strong> and utilizes the
            <strong> pulse through transmission method</strong>.
          </p>
          <p>
            Real-time <strong>A-Scan</strong> and <strong>C-Scan</strong> images are generated and recorded for offline analysis.
            Additionally, user-specific reports are automatically generated to validate the acceptance of inspected parts.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage3}
          alt="Hover View - Flat Bed Scanner"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
