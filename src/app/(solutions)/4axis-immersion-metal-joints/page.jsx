// app/projects/four-axis/page.jsx
import React from 'react'
import Image from 'next/image'
import image5 from '@/asserts/soluctions/5.webp'       // Update paths as needed
import hoverImage5 from '@/asserts/soluctions/5h.gif'

// ✅ Page Metadata
export const metadata = {
  title:
    "A Four Axis Immersion Testing System for Evaluation of Dissimilar Metal Fusion Joints",
  description:
    "Ultrasonic evaluation of bonding between dissimilar materials using high-frequency focused transducers. Real-time A and C-scan, total data capture, and in-depth bond analysis with A, B, and C-scan imaging.",
  keywords:
    "ultrasonic evaluation, dissimilar metal bonding, immersion testing, fusion joints, C-scan imaging, B-scan analysis, A-scan ultrasound, four axis testing system",
  openGraph: {
    title:
      "A Four Axis Immersion Testing System | Dissimilar Metal Fusion Joints",
    description:
      "Real-time A, B, and C-scan ultrasonic imaging to evaluate dissimilar metal bonds using a four-axis immersion system.",
    images: [
      {
        url: "/assets/image5.jpg", // Update if using CDN or full path
        width: 1200,
        height: 630,
        alt: "Four Axis Immersion Testing System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-4">
        A Four Axis Immersion Testing System for Evaluation of Dissimilar Metal Fusion Joints
      </h1>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <Image
            src={image5}
            alt="Four Axis Immersion Testing System"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            For ultrasonic evaluation of the bonding between dissimilar materials using high-frequency focused transducers, 
            the results are presented in real-time <strong>A-scan</strong> and <strong>C-scan</strong> views along with total data capture.
          </p>
          <p>
            Further analysis and measurement are performed to comprehensively evaluate the bond strength using
            <strong> A, B, and C-scan imaging techniques</strong>.
          </p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Image
          src={hoverImage5}
          alt="Scan Visualization Preview"
          width={600}
          height={300}
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  )
}

export default page
