import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from "../Compoents/Navabar";
import Footer from "../Compoents/Footer";
import dynamic from "next/dynamic";

const ClientLayout =  dynamic(() => import("../app/ClientLayout"))

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Advanced Ultrasonic Solutions & NDT Equipment",
  description:
    "VIVACE SONICS PVT. LTD is a leading provider of ultrasonic testing solutions, NDT equipment, and composite testing systems. Based in Hyderabad, we specialize in high-quality probes, control systems, and non-destructive testing solutions for defense, nuclear, and space industries.",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body         style={{ minHeight: "100vh", margin: 0 }}

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <ClientLayout>
        <NavbarComponent />
         <main style={{ marginTop: "150px", flex: 1 }}>
        {children}
        </main>
        <Footer />
        </ClientLayout>
        </div>
      </body>

    </html>
    
  );
}
