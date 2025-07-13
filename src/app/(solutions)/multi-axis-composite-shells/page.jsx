import React from 'react'
import Image from 'next/image'
import image2 from '@/asserts/soluctions/2.webp' // Adjust path based on your structure
import hoverImage2 from '@/asserts/soluctions/2h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "Multi-Axis Ultrasonic Inspection System for Composite Shells | L&T Defense",
  description:
    "Custom-designed ultrasonic inspection system using dry coupled probes for composite shell evaluation. C-Scan image results help identify defect location, size, and area easily.",
  keywords:
    "multi-axis ultrasonic system, composite shell inspection, L&T Defense, dry coupled ultrasonic probe, C-Scan imaging, defect measurement, non-destructive testing",
  openGraph: {
    title: "Multi-Axis Ultrasonic Inspection System for Composite Shells",
    description:
      "Dry coupled ultrasonic probe system for inspecting composite shells with C-scan image results for easy defect analysis.",
    images: [
      {
        url: "/assets/image2.jpg",
        width: 1200,
        height: 630,
        alt: "Ultrasonic Inspection of Composite Shells",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Multi-Axis Ultrasonic Inspection System for Composite Shells
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> L&T Defense, Coimbatore
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image2}
            alt="Ultrasonic Inspection System for Composite Shells"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This system was <strong>custom-designed</strong> for the inspection of <strong>composite shells</strong> using
            specially built <strong>Dry Coupled Ultrasonic Probes</strong>, which were developed in-house.
          </p>
          <p>
            The inspection results are presented in <strong>C-Scan image format</strong>, enabling users to quickly analyze
            defect parameters such as <strong>length, location, and area</strong>.
          </p>
          <p>
            Its multi-axis mechanism ensures complete coverage of complex shell geometries with consistent contact and accuracy.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage2}
          alt="Composite Shells Scan Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
