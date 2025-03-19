"use client";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  // Navigation function to handle page routing
  const navigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      <footer className="bg-[#0f172a] text-white py-12 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://christuniversity.in/images/logo.jpg"
                  alt="CHRIST University Logo"
                  className="h-14 w-auto cursor-pointer"
                  onClick={() => navigateTo("/")}
                />
              </div>
              <p className="text-gray-300 mb-6">
                Pioneering research in Industrial IoT and smart technologies for
                a better tomorrow.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://facebook.com", "_blank");
                  }}
                  className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a] transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://twitter.com", "_blank");
                  }}
                  className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a] transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://instagram.com", "_blank");
                  }}
                  className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a] transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://linkedin.com", "_blank");
                  }}
                  className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a] transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#d3b77b] font-bold text-xl mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/");
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/about");
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/faculty");
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/collaboration");
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Collaboration
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/consultation");
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/student");
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Students
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-[#d3b77b] font-bold text-xl mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-300 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    CHRIST (Deemed to be University)
                    <br />
                    Kengeri Campus, Bangalore
                    <br />
                    Karnataka - 560074
                  </p>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">+91 80 4012 9100</p>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:research@christuniversity.in"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    research@christuniversity.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-[#172554] mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 CHRIST (Deemed to be University). All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/privacy-policy");
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/terms");
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/cookie-policy");
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
