import React from 'react'
import Image from 'next/image'
import image8 from '@/asserts/soluctions/8.webp' // Update this path as per your project
import hoverImage8 from '@/asserts/soluctions/8h.webp'

// ✅ SEO Metadata
export const metadata = {
  title: "Legacy-A | Ultrasonic Immersion Testing System for INSAT Tanks",
  description:
    "A fully automated ultrasonic immersion system for inspecting electron-beam welded joints. Designed, manufactured, and installed with high-precision mechanics and vacuum-assisted tank holders.",
  keywords:
    "legacy-A, ultrasonic immersion system, INSAT tanks testing, electron-beam welded joint inspection, NDT automation, ultrasonic weld testing, immersion tank scanner",
  openGraph: {
    title: "Legacy-A | Ultrasonic Immersion Testing System for INSAT Tanks",
    description:
      "Automated ultrasonic immersion system with vacuum-assisted tank holders for electron-beam weld inspection of INSAT tanks.",
    images: [
      {
        url: "/assets/image8.jpg",
        width: 1200,
        height: 630,
        alt: "Legacy-A Ultrasonic Immersion Testing System",
      },
    ],
  },
}

const page = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        Legacy-A: Ultrasonic Immersion Testing System for INSAT Tanks
      </h1>

      <p className="text-center text-muted mb-5">
        <strong>Client:</strong> Confidential Aerospace Project
      </p>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3">
          <Image
            src={image8}
            alt="Legacy-A Ultrasonic Immersion System"
            className="img-fluid rounded"
            placeholder="blur"
          />
        </div>

        <div className="col-md-6">
          <p>
            This ultrasonic immersion testing system was developed to inspect 
            <strong> electron-beam welded joints</strong> in critical components of INSAT tanks.
          </p>
          <p>
            The system was <strong>fully designed, manufactured, and installed</strong> in-house with precision mechanics 
            and features such as <strong>vacuum-assisted tank holders</strong> for stable and efficient testing.
          </p>
          <p>
            It represents a significant milestone in automation for space-grade component testing.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Image
          src={hoverImage8}
          alt="Legacy-A Hover Preview"
          className="img-fluid rounded shadow"
          width={600}
          height={300}
        />
      </div>
    </div>
  )
}

export default page
