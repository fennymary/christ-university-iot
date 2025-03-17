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
              <div className="grid grid-cols-2 gap-4 mt-6">
                <img
                  src="https://th.bing.com/th/id/OIP.Wr1eKs2VHyEN_R7FtGI_eAHaE8?w=4200&h=2800&rs=1&pid=ImgDetMain"
                  alt="Industrial IoT Sensors"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
                <img
                  src="https://th.bing.com/th/id/OIP.WI6-zzckHV8bP_ib1r0ubwHaE8?rs=1&pid=ImgDetMain"
                  alt="Technical Consultation"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
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
    </div>
  );
}

export default App;
