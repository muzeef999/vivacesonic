import SlickSlider from '@/Compoents/SlickSlider'
import React from 'react'

  export const metadata = {
  title: "Our Clients | Trusted Brands We Serve - [Your Company Name]",
  description:
    "Discover the prestigious clients who trust [Your Company Name] for advanced solutions. From startups to enterprises, we deliver results that matter.",
  keywords:
    "clients, trusted brands, customer showcase, business partners, enterprise clients, company portfolio, satisfied customers, [Your Company Name]",
}


const page = () => {



  return (
    <>
    <div id="clients" className=" my-5">
        <SlickSlider />
      </div>
    </>
  )
}

export default page