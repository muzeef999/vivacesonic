import React from 'react'
import Image from 'next/image'
import image4 from '@/asserts/soluctions/4.webp' // Update this path as needed
import hoverImage4 from '@/asserts/soluctions/3h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "Portable C-Scan Machine for Honeycomb Panels | Dynamitic Technologies",
  description:
    "Portable ultrasonic inspection machine for aluminum and carbon-based honeycomb panels using through transmission dry coupling probes. Generates C-Scan images through manual scanning.",
  keywords:
    "portable C-scan machine, honeycomb panel inspection, aluminum composite NDT, carbon fiber testing, dry coupling ultrasonic probe, manual scan system, Dynamitic Technologies",
  openGraph: {
    title: "Portable C-Scan Machine for Honeycomb Panels",
    description:
      "C-scan ultrasonic system for inspecting honeycomb structures using dry contact manual probes. Used for aluminum and carbon-based panels.",
    images: [
      {
        url: "/assets/image4.jpg",
        width: 1200,
        height: 630,
        alt: "Portable C-Scan Honeycomb Panel Inspection System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Portable C-Scan Machine for Honeycomb Panels with Dry Coupling Probes
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Dynamitic Technologies, Bangalore
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image4}
            alt="Portable C-Scan Honeycomb Panel Inspection System"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This <strong>portable ultrasonic inspection system</strong> is specifically designed for inspecting 
            <strong> honeycomb panels made of aluminum and carbon-based materials</strong>.
          </p>
          <p>
            It features a set of <strong>dry contact manual probes</strong> operating in 
            <strong>through transmission mode</strong>, allowing operators to scan manually and generate accurate 
            <strong> C-Scan images</strong> of the panel structure.
          </p>
          <p>
            The compact design and flexible probe handling make it ideal for field inspections and non-lab environments.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage4}
          alt="Portable C-Scan System - Hover Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
