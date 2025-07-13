import React from 'react'
import Image from 'next/image'
import image7 from '@/asserts/soluctions/7.webp' // Update with actual path
import hoverImage7 from '@/asserts/soluctions/7h.webp'

// ✅ SEO Metadata
export const metadata = {
  title:
    "Automated Ultrasonic Inspection System for Missile Motor Casing | Economical Explosives Ltd",
  description:
    "Fully automated ultrasonic inspection system with pulse echo and through transmission modes for inspecting missile motor casings. Real-time A and C-scan data, traceable reports, and component-level evaluation.",
  keywords:
    "missile inspection system, ultrasonic NDT, pulse echo, through transmission, missile motor casing, dry coupled roller probe, A-scan, C-scan, Economical Explosives Ltd",
  openGraph: {
    title: "Ultrasonic Inspection System for Missile Motor Casing",
    description:
      "Dual-mode ultrasonic system using pulse echo and through transmission for rubber bonding inspection in missile motor casings.",
    images: [
      {
        url: "/assets/image7.jpg",
        width: 1200,
        height: 630,
        alt: "Ultrasonic Missile Motor Inspection System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Automated Ultrasonic Inspection System for Missile Motor Casing
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Economical Explosives Ltd
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image7}
            alt="Ultrasonic Inspection System for Missile Motor Casing"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This <strong>dual-mode automated ultrasonic inspection system</strong> uses both <strong>pulse echo</strong> and
            <strong> through transmission</strong> methods to inspect missile motor casing components.
          </p>
          <p>
            It inspects <strong>tube-to-rubber bonding</strong> using pulse echo and <strong>rubber-to-rubber bonding</strong> 
            at both ends of the tube using a <strong>dry-coupled roller probe arrangement</strong>.
          </p>
          <p>
            The system records <strong>real-time A-scan and C-scan data</strong>, stores it for further analysis, and generates 
            reports in a user-defined format. These reports include full traceability of the inspection process and component 
            identification for audit and compliance.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage7}
          alt="Missile Casing Inspection Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
