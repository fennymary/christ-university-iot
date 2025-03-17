"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Bell, LightbulbIcon, ChevronRight, Search, Users, BookOpen, Award, ArrowRight, Lightbulb, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header/Navigation */}


      {/*done*/}
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-[#0f1e45] rounded-full flex items-center justify-center text-white font-bold text-xl">
                CU
              </div>
              <div className="ml-2 text-xs text-[#0f1e45]">
                <div className="font-bold text-lg">CHRIST UNIVERSITY</div>

              </div>
            </div>


            <Button
              variant="ghost"
              size="icon"
              className="text-[#0f1e45]"
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          <div className="space-y-6 text-lg font-medium text-[#0f1e45]">
            <a href="home" className="block py-2 border-b border-gray-100">Home</a>
            <a href="about" className="block py-2 border-b border-gray-100">About</a>
            <a href="faculty" className="block py-2 border-b border-gray-100">Faculty</a>
            <a href="collabration" className="block py-2 border-b border-gray-100">Collaboration</a>
            <a href="consultation" className="block py-2 border-b border-gray-100">Consultation</a>
          </div>
        </div>
      )}

      {/* done*/}



      {/* Hero Section */}
      <section className="py-8 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="bg-amber-200 text-amber-800 text-xs font-medium px-3 py-1 rounded-full mr-3">New</div>
            <p className="text-slate-600">Research Initiative 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight ">
                Advanced<br />Research For Industrial<br />IoT
              </h1>
              <p className="text-slate-600 mt-6 max-w-lg">
                Pioneering innovative solutions at the intersection of IoT, AI, and
                industrial applications to transform the future of smart
                manufacturing.
              </p>

              <div className="flex items-center mt-8">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Researcher" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Researcher" />
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" className="w-8 h-8 rounded-full border-2 border-white" alt="Researcher" />
                </div>
                <p className="text-slate-600 ml-4"> 9 Researchers contributing to this initiative</p>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="bg-white rounded-3xl shadow-lg p-6 max-w-md ml-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-navy-900 font-medium">IoT Research Hub</h3>
                      <p className="text-slate-500 text-sm">Connecting devices, transforming industries</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-500">Research Progress</span>
                    <span className="text-sm text-slate-500">66%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-navy-900 h-2 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <ArrowRight className="h-5 w-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Laboratory Section */}
      <section className="py-12 px-6 md:px-12 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">About Laboratory</h2>

          <div className="bg-white rounded-3xl shadow-sm p-8">
            <p className="text-slate-600 leading-relaxed">
              The Advanced Research in Industrial IoT (ARIIoT) lab, sponsored by Advantech India, aims to serve as a hub for cutting-edge research and development in Industrial Internet of Things (IIoT). The lab envisions fostering innovation, collaboration, and knowledge dissemination to address industry challenges and advance technology adoption in IIoT.

            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Established in 2025, our laboratory serves as a hub for collaboration between academia and industry partners, fostering knowledge exchange and technological innovation. We are committed to training the next generation of IoT specialists through hands-on research experiences and industry-relevant projects.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Our lab focuses on research, consultancy, and project collaboration opportunities for faculty and students in three strategic domains: Healthcare Management, Video Analytics, and Cold Chain Management. The objective is to create impactful research contributions, provide industry consultancy, and develop real-world projects in these verticals.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              ARIIOT aims to bridge the gap between academia and industry by enabling research, consultancy, and projects in these critical domains. By engaging faculty and students in real-world problem-solving, we drive innovation and contribute to technological advancements with a significant societal impact. This initiative will establish a collaborative ecosystem where academic research translates into practical, industry-ready solutions.
            </p>



          </div>
        </div>
      </section>

      {/* Content and Research Projects Section */}
      <section className="py-12 px-6 md:px-12 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content Section */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-slate-100 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 ml-4">Domains</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900">Healthcare Management</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      ARIIOT leverages AI, machine learning, and blockchain for smart healthcare, focusing on predictive analytics, telemedicine, and cybersecurity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900">Video Analytics</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      ARIIOT researches AI-driven video analytics for surveillance, traffic management, and behavior analysis, offering consultancy in smart city security, retail, and automated quality inspection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900">Cold Chain Management</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      ARIIOT explores AI, IoT, and blockchain for cold chain monitoring, offering consultancy in smart storage, AI-driven logistics, and energy-efficient supply chain solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Ongoing Research & Projects */}
            <div className="bg-white rounded-3xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <div className="bg-slate-100 p-3 rounded-full">
                  <LightbulbIcon className="h-6 w-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 ml-4">Ongoing Research & Projects</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900"> Video Analytics - IRetail  </h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Developing an Integrated Video Analytics Solution for optimizing retail layouts, enhancing customer engagement, and enabling data-driven merchandising decisions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start mt-6">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900">Medical Imaging (Automation) - iHealthcare</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Developing AI-powered adaptive exposure control, cloud-based processing, and data masking for high-quality, privacy-compliant medical imaging.
                    </p>

                  </div>
                </li>
                <li className="flex items-start mt-6">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900">IoT Edge Connectivity Solutions for Smart Buildings</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Developing a modular, secure, and low-latency IoT framework with seamless device integration and a real-time WISE-PaaS dashboard for smart building management.
                    </p>



                  </div>
                </li>
                <li className="flex items-start mt-6">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900"> Cold Chain Management System for Vaccine Storage</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Developing an IoT-driven cold chain system with real-time monitoring, predictive analytics, smart packaging, and energy-efficient transportation to enhance sustainability and efficiency.
                    </p>



                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;