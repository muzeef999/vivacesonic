import React from 'react'
import Image from 'next/image'
import image9 from '@/asserts/soluctions/9.webp' // Adjust path as needed
import hoverImage9 from '@/asserts/soluctions/8h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "Legacy-B | Ultrasonic Immersion Testing System for INSAT Components",
  description:
    "Ultrasonic immersion system designed and installed for testing INSAT components like shells, gas ports, and rings using 5-axis mechanics and 15 MHz focused beam. Developed in 1995-96.",
  keywords:
    "legacy-B, ultrasonic immersion testing, INSAT components, 5-axis mechanics, focused ultrasonic beam, defect detection, 1995 ultrasonic system",
  openGraph: {
    title: "Legacy-B | Ultrasonic Immersion Testing System for INSAT Components",
    description:
      "5-axis ultrasonic immersion system for INSAT component testing developed in 1995 with high-frequency focused beam defect detection.",
    images: [
      {
        url: "/assets/image9.jpg",
        width: 1200,
        height: 630,
        alt: "Legacy-B INSAT Component Testing System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Legacy-B: Ultrasonic Immersion Testing System for INSAT Components
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Confidential Aerospace Application
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image9}
            alt="Legacy-B Ultrasonic System for INSAT Components"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This ultrasonic immersion testing system was developed for inspecting various <strong>INSAT components</strong> such as
            shells, gas ports, and rings.
          </p>
          <p>
            It features <strong>5-axis precision mechanics</strong> and fully automated transducer manipulators
            that transmit and receive a <strong>15 MHz ultrasonic focused beam</strong> to detect and map internal defects.
          </p>
          <p>
            Proudly developed as an indigenous product during <strong>1995–1996</strong>, this system reflects
            our early innovation in the field of ultrasonic non-destructive testing.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage9}
          alt="Legacy-B Hover Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
