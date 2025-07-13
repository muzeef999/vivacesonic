"use client";

import React from "react";
import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "@/style/NavbarCustom.css";

const solutions = [
  {
    name: "Automated Ultrasonic Case Depth Measurement System",
    shortName: "Ultrasonic Case Depth",
    slug: "ultrasonic-case-depth",
  },
  {
    name: "Multi-Axis Ultrasonic Inspection for Composite Shells",
    shortName: "Multi-Axis Composite",
    slug: "multi-axis-composite-shells",
  },
  {
    name: "Flat Bed Scanner for Aero-Space Composite",
    shortName: "Flatbed Scanner",
    slug: "flatbed-scanner-aerospace",
  },
  {
    name: "Portable C-Scan for Honeycomb Panels (Dry Coupling)",
    shortName: "Portable C-Scan",
    slug: "portable-cscan-honeycomb",
  },
  {
    name: "Four Axis Immersion Testing for Dissimilar Metal Joints",
    shortName: "4-Axis Immersion",
    slug: "4axis-immersion-metal-joints",
  },
  {
    name: "Tube to Sheet Weld Inspection System",
    shortName: "Tube Weld Inspection",
    slug: "tube-sheet-weld-inspection",
  },
  {
    name: "Automated Ultrasonic for Missile Motor Casing",
    shortName: "Missile Motor Casing",
    slug: "missile-motor-casing-inspection",
  },
  {
    name: "Rotating Head Bar/Tube Testing System",
    shortName: "Rotating Head Tester",
    slug: "rotating-head-bar-tube",
  },
  {
    name: "Legacy-A: Immersion Testing for INSAT Tanks",
    shortName: "Legacy-A Tanks",
    slug: "legacy-a-insat-tanks",
  },
  {
    name: "Legacy-B: Immersion Testing for INSAT Components",
    shortName: "Legacy-B Components",
    slug: "legacy-b-insat-components",
  },
];

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" fixed="top" className="sticky">
  <Container className="custom-navbar d-flex align-items-center">
    {/* 🔰 Logo */}
    <Navbar.Brand href="/">
      <div style={{ width: "25%" }}>
         <svg
              id="logo"
              width="100%"
              height="auto"
              viewBox="0 0 353 174"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9C0 9 214 166 218 169C222 172 227 174 233 174C239 174 243 171 245 169C247 167 353 34 353 34L295.5 33.5L241.5 101.5C241.5 101.5 231.5 114.5 217.5 104.5C189.02 84.16 99.5 9.5 99.5 9.5L0 9Z"
                fill="#FF3329"
              />
              <path
                d="M186.496 8.5L154.496 48.5C153.206 50.65 151.076 53.83 153.496 56.5C155.086 58.25 158.616 60 162.496 60.5C176.616 62.33 180.496 62.5 186.496 59.5C192.496 56.5 198.696 50.82 198.496 50.5L212.496 34.5L229.496 15.5C239.496 6.5 256.496 6.5 280.496 6.5C297.586 6.5 321.626 7.63 335.996 22C343.276 29.28 341.756 34.42 341.996 36C341.996 36 342.176 38.05 340.586 41.03C338.996 44.01 306.996 85 306.996 85L267.496 84.5C267.496 84.5 301.386 41.16 302.496 39.5C304.496 36.5 302.016 33.49 300.496 32.5C297.476 30.53 293.706 27.24 277.496 26.5C262.556 25.81 260.626 28.61 259.496 29.5C259.496 29.5 240.506 52.49 240.496 52.5L230.496 64.5C226.496 69.5 214.496 78.5 200.496 82.5C181.756 87.85 158.656 86.9 144.496 83.5C130.606 80.17 119.726 70.19 117.496 64.5C112.426 51.56 118.536 42.93 119.496 41.5L125.496 33.5L150.996 2"
                fill="white"
              />
              <path
                d="M186.496 8.5L154.496 48.5C153.206 50.65 151.076 53.83 153.496 56.5C155.086 58.25 158.616 60 162.496 60.5C176.616 62.33 180.496 62.5 186.496 59.5C192.496 56.5 198.696 50.82 198.496 50.5L212.496 34.5L229.496 15.5C239.496 6.5 256.496 6.5 280.496 6.5C297.586 6.5 321.626 7.63 335.996 22C343.276 29.28 341.756 34.42 341.996 36C341.996 36 342.176 38.05 340.586 41.03C338.996 44.01 306.996 85 306.996 85L267.496 84.5C267.496 84.5 301.386 41.16 302.496 39.5C304.496 36.5 302.016 33.49 300.496 32.5C297.476 30.53 293.706 27.24 277.496 26.5C262.556 25.81 260.626 28.61 259.496 29.5C259.496 29.5 240.506 52.49 240.496 52.5L230.496 64.5C226.496 69.5 214.496 78.5 200.496 82.5C181.756 87.85 158.656 86.9 144.496 83.5C130.606 80.17 119.726 70.19 117.496 64.5C112.426 51.56 118.536 42.93 119.496 41.5L125.496 33.5L150.996 2"
                stroke="#FF3329"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
            </svg>
      </div>
    </Navbar.Brand>

    {/* 📱 Toggle for mobile */}
    <Navbar.Toggle aria-controls="navbarNav" />
    <Navbar.Collapse id="navbarNav">
      
      {/* ✅ Centered Nav Links */}
      <Nav className="mx-auto d-flex align-items-center gap-4">
        <Link className="nav_link" href="/">Home</Link>
        <Link className="nav_link" href="/about-us">About</Link>

        <NavDropdown
          className="nav_link"
          title="Solutions"
          id="solutions-dropdown"
          menuVariant="dark"
        >
          {solutions.map((item) => (
            <NavDropdown.Item
              as="span"
              key={item.slug}
              style={{color:'#FFF'}}
            >
              <Link href={`/${item.slug}`} passHref>
                <span className="dropdown-menu">{item.shortName}</span>
              </Link>
            </NavDropdown.Item>
          ))}
        </NavDropdown>

        <Link className="nav_link" href="/blog">Blogs</Link>
        <Link className="nav_link" href="/our-clients">Clients</Link>
      </Nav>
    </Navbar.Collapse>

    {/* 📞 CTA Button */}
    <Link className="contactbutton ms-lg-3" href="/contact">Contact &nbsp; &nbsp; &nbsp;</Link>
  </Container>
</Navbar>

  );
};

export default NavbarComponent;
