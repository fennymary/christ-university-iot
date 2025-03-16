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
  Settings,
} from "lucide-react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}


      {/* Hero Section */}
      <section className="bg-[#e8f0f7] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a1e3c] mb-4">
            Advanced Research For Industrial IoT
          </h1>
          <p className="text-[#5a6a7e] text-lg max-w-3xl">
            Pioneering innovative solutions at the intersection of IoT, AI, and
            industrial applications to transform the future of smart
            manufacturing.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0a1e3c] mb-4">
                Our Consultation Approach
              </h2>
              <p className="text-[#5a6a7e] mb-4">
                At Christ University, we offer specialized consultation services
                that bridge academic expertise with real-world industrial
                challenges. Our faculty experts work closely with organizations
                to provide innovative solutions tailored to specific needs.
              </p>
              <p className="text-[#5a6a7e] mb-4">
                Whether you're looking for technical expertise, research
                insights, or strategic guidance, our consultation services can
                help you achieve your goals and overcome challenges.
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-3">
                Request a Consultation
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-[#5a6a7e] mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#5a6a7e] mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#5a6a7e] mb-2"
                    htmlFor="organization"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your organization name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-[#5a6a7e] mb-2"
                    htmlFor="message"
                  >
                    Consultation Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Describe your consultation needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#0a1e3c] text-white py-2 px-4 rounded hover:bg-[#0a1e3c]/90"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0a1e3c] mb-6">
            Our Consultation Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-3">
                Industrial IoT Solutions
              </h3>
              <p className="text-[#5a6a7e]">
                Expert consultation on implementing IoT technologies in
                industrial settings, optimizing processes, and developing smart
                manufacturing solutions.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-3">
                AI & Machine Learning
              </h3>
              <p className="text-[#5a6a7e]">
                Specialized guidance on implementing AI and machine learning
                solutions for data analysis, predictive maintenance, and process
                optimization.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0a1e3c] mb-3">
                Research Partnerships
              </h3>
              <p className="text-[#5a6a7e]">
                Collaborative research opportunities with our faculty experts to
                address complex challenges and develop innovative solutions.
              </p>
            </div>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#0a1e3c] mb-4">
              Why Choose Our Consultation Services?
            </h2>
            <ul className="space-y-3 text-[#5a6a7e]">
              <li>
                • Access to expert faculty with extensive industry and research
                experience
              </li>
              <li>
                • Customized solutions tailored to your specific challenges
              </li>
              <li>
                • Cutting-edge research insights and technological expertise
              </li>
              <li>
                • Collaborative approach that ensures practical and
                implementable solutions
              </li>
              <li>
                • Ongoing support and guidance throughout the implementation
                process
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1e3c] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <a href="/">
                  <img
                    src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294"
                    alt="Christ University Logo"
                    className="h-12 w-12 mr-3"
                  />
                </a>
                <span className="font-bold text-xl">CHRIST UNIVERSITY</span>
              </div>
              <p className="text-gray-300 mb-4">
                Pioneering research in Industrial IoT and smart technologies for
                a better tomorrow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Faculty
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Collaboration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Consultation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-1" />
                  <span>
                    CHRIST (Deemed to be University)
                    <br />
                    Kengeri Campus, Bangalore
                    <br />
                    Karnataka - 560074
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 80 4012 9100</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>research@christuniversity.in</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CHRIST (Deemed to be University). All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
