"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "../Compoents/Navabar";
import Footer from "../Compoents/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Advanced Ultrasonic Solutions & NDT Equipment",
//   description: "VIVACE SONICS PVT. LTD is a leading provider of ultrasonic testing solutions, NDT equipment, and composite testing systems. Based in Hyderabad, we specialize in high-quality probes, control systems, and non-destructive testing solutions for defense, nuclear, and space industries.",
// };

const queryClient = new QueryClient()


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider  client={queryClient}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarComponent />
        
        {children}
       <Footer />
      </body>
      </QueryClientProvider>
    </html>
  );
}
