"use client";
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, LightbulbIcon, ArrowRight, UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // Navigation function to handle page routing
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#d3b77b]/20 blur-3xl -z-10"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-[#d3b77b]/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl -z-10"></div>

      {/* Yellow Circle Accent */}
      <div className="absolute top-32 right-1/4 w-16 h-16 rounded-full bg-[#d3b77b] opacity-70 -z-10"></div>
      <div className="absolute bottom-64 left-16 w-8 h-8 rounded-full bg-[#d3b77b] opacity-60 -z-10"></div>
      <div className="absolute top-96 left-1/3 w-12 h-12 rounded-full bg-[#d3b77b] opacity-50 -z-10"></div>

      {/* Blue Circle Accent */}
      <div className="absolute top-64 left-20 w-10 h-10 rounded-full bg-blue-600 opacity-40 -z-10"></div>
      <div className="absolute bottom-32 right-20 w-14 h-14 rounded-full bg-blue-600 opacity-30 -z-10"></div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-10 w-40 h-1 bg-[#d3b77b]/40 rotate-45 -z-10"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-1 bg-blue-600/30 -rotate-45 -z-10"></div>

      {/* Header */}


      {/* Main Content */}
      <main className="flex-grow bg-[#e2e8f0] relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <div className="relative">
              {/* Yellow accent shape behind the heading */}
              <div className="absolute -left-4 top-10 w-24 h-24 bg-[#d3b77b]/30 rounded-full blur-md -z-10"></div>
              <div className="absolute left-64 top-16 w-16 h-16 bg-blue-500/20 rounded-full blur-sm -z-10"></div>

              <h2 className="text-5xl font-bold text-[#0f172a] mb-6 relative">
                Advanced Research For Industrial IoT
                {/* Decorative element */}
                <div className="absolute -right-4 -bottom-2 w-12 h-2 bg-[#d3b77b] rounded-full"></div>
              </h2>
              <p className="text-gray-700 mb-8">
                Pioneering innovative solutions at the intersection of IoT, AI, and
                industrial applications to transform the future of smart
                manufacturing.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-[#0f1e45] text-white hover:bg-[#1a2a50] rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                  onClick={() => navigateTo('/research')}
                >
                  <span className="relative z-10">Explore Research</span>
                  <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full -z-0"></div>
                </button>
                <button
                  className="border border-[#d3b77b] text-[#d3b77b] hover:bg-[#d3b77b] hover:text-white rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg"
                  onClick={() => navigateTo('/faculty')}
                >
                  Join Our Team
                </button>
              </div>

              <div className="flex items-center mt-8 mb-8 relative">
                {/* Small decorative circle */}
                <div className="absolute -left-6 top-1/2 w-3 h-3 bg-[#d3b77b] rounded-full"></div>

                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Researcher" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Researcher" />
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Researcher" />
                </div>
                <p className="ml-4 text-gray-700">20+ Researchers contributing to this initiative</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md mb-8 relative overflow-hidden">
                {/* Yellow corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#d3b77b]/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full"></div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-4">Announcement Details</h3>
                <p className="text-gray-700 mb-4">
                  Join us for the upcoming IoT research symposium featuring industry experts and academic researchers.
                </p>
                <div className="mt-6">
                  <p className="text-gray-700"><strong>Lab Venue:</strong></p>
                  <p className="text-gray-700">222, 2nd block, 1st floor</p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700"><strong>Date:</strong></p>
                  <p className="text-gray-700">March 10th, 2025</p>
                </div>
                <div className="mt-6">
                  <p className="text-gray-700"><strong>Time:</strong></p>
                  <p className="text-gray-700">10:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* IoT Researchers Image */}
              <div className="relative rounded-3xl overflow-hidden mb-8">
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#d3b77b]/40 rounded-bl-3xl z-10"></div>

                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="IoT device researchers"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Our researchers working with IoT devices</p>
                </div>
              </div>
            </div>

            {/* Right Column - Images and Event Details */}
            <div className="flex flex-col space-y-8 relative">
              {/* Decorative elements */}
              <div className="absolute top-20 right-10 w-12 h-12 bg-[#d3b77b]/30 rounded-full blur-sm -z-10"></div>
              <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-sm -z-10"></div>

              <div className="relative">
                {/* Corner accent */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#d3b77b] rounded-br-xl z-10 opacity-70"></div>

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Woman with laptop"
                  className="rounded-3xl w-full h-64 object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-[550px] h-auto flex flex-col justify-between relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/10 rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#d3b77b]/10 rounded-tl-3xl"></div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-4 text-center relative z-10">Event Details</h3>

                {/* Inner event sections */}
                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3 cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo('/events/symposium')}
                >
                  {/* Yellow accent on hover */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>

                  <h4 className="font-semibold text-[#0f172a]">IoT Symposium</h4>
                  <p className="text-gray-700 text-sm">Join industry leaders to discuss cutting-edge IoT advancements.</p>
                </div>

                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3 cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo('/events/ai-manufacturing')}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>

                  <h4 className="font-semibold text-[#0f172a]">AI in Manufacturing</h4>
                  <p className="text-gray-700 text-sm">Explore AI-powered automation in industrial settings.</p>
                </div>

                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo('/events/workshop')}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>

                  <h4 className="font-semibold text-[#0f172a]">Smart Devices Workshop</h4>
                  <p className="text-gray-700 text-sm">Hands-on training with the latest IoT-enabled devices.</p>
                </div>
              </div>

              {/* IoT Research Hub Card */}
              <div
                className="bg-white p-6 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                onClick={() => navigateTo('/research-hub')}
              >
                {/* Yellow corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#d3b77b]/20 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="bg-[#fef3c7] p-3 rounded-full group-hover:bg-[#d3b77b]/40 transition-colors duration-300">
                    <LightbulbIcon className="h-6 w-6 text-[#d97706]" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-[#d3b77b] group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-2 relative z-10">IoT Research Hub</h3>
                <p className="text-gray-600 mb-4 relative z-10">Connecting devices, transforming industries</p>

                <div className="mb-2 relative z-10">
                  <p className="text-sm text-gray-600 mb-1">Research Progress</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-600 h-2.5 rounded-full group-hover:bg-[#d3b77b] transition-colors duration-500" style={{ width: '66%' }}></div>
                  </div>
                </div>
                <p className="text-right text-gray-600 relative z-10">66%</p>
              </div>

              {/* Additional IoT Researchers Image */}
              <div className="relative rounded-3xl overflow-hidden">
                {/* Corner accent */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#d3b77b] rounded-tl-xl z-10 opacity-70"></div>

                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="IoT device research team"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold">Advanced IoT device testing in our lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
