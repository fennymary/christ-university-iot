"use client";
import React from "react";
import {
  Wind,
  Factory,
  Award,
  Globe,
  Zap,
  Building2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Lightbulb,
} from "lucide-react";

function App() {
  const projects = [
    {
      title: "Healthcare Management",
      description:
        "Advanced IoT solutions for healthcare facility air quality management and monitoring.",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Video Analytics",
      description:
        "AI-powered analytics for monitoring and improving air quality metrics in real-time.",
      image:
        "https://sptel.com/wp-content/uploads/2024/08/video-analytics-for-security-featured-images.jpg",
    },
    {
      title: "Cold Chain Management",
      description:
        "Environmental monitoring solutions for temperature-controlled environments.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4a8a] py-18">
        <div className="container mx-auto px-7">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-5 text-white">
                Devic Earth Private Limited
              </h1>
              <p className="text-xl text-gray-200">
                Devic Earth Pvt. Ltd. is a Bengaluru-based green technology
                company specializing in innovative solutions for air pollution
                control.
              </p>
            </div>
            <img
              src="https://devic-earth.com/wp-content/uploads/2024/08/Logo.png"
              alt="Devic Earth Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Wind className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#1a365d] mb-2">30-66%</h3>
              <p className="text-gray-600">Reduction in Air Pollutants</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Factory className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#1a365d] mb-2">2018</h3>
              <p className="text-gray-600">Established in Bengaluru</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Lightbulb className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-[#1a365d] mb-2">$8.2M</h3>
              <p className="text-gray-600">Company Valuation</p>
            </div>
          </div>
        </div>
      </div>
      {/* Pure Skies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1a365d]">
                Pure Skies Technology Of Devic
              </h2>
              <p className="text-gray-600 mb-6">
                Their flagship product utilizes advanced pulsed radio wave
                technology to enhance air quality over extensive areas,
                effectively reducing particulate matter such as PM2.5 and PM10.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Zap className="text-[#4CAF50]" />
                  <span className="text-gray-700">
                    Advanced pulsed radio wave technology
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="text-[#4CAF50]" />
                  <span className="text-gray-700">Wide area coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Building2 className="text-[#4CAF50]" />
                  <span className="text-gray-700">
                    Suitable for various industries
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Industrial Air Quality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">
              Featured Collaborative Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative solutions across multiple sectors to improve air
              quality and environmental conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#1a365d]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a365d]">
              Key Partner
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                  alt="Advantech"
                  className="w-48 h-48 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[#1a365d]">
                    Advantech
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Global leader in industrial computing and IoT solutions,
                    offering comprehensive products and services across various
                    sectors. Specializing in industrial automation, embedded
                    computing, and intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#162750] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Collaborating?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            We're always looking for new partners to join our research
            initiatives in Industrial IoT and smart manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="inline-block bg-[#d4b47c] hover:bg-[#d7dee4] hover:text-[#162750] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contact Our Research Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
