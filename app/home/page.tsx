import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, LightbulbIcon, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#e2e8f0] py-4 px-6 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">
            <img
              src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294"
              alt="Christ University Logo"
              className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-[#0f172a] text-2xl font-bold">CHRIST UNIVERSITY</h1>
              <p className="text-[#475569] text-sm">INSTITUTE OF MANAGEMENT</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#0f172a] hover:text-blue-700">Home</a>
            <a href="#" className="text-[#0f172a] hover:text-blue-700">About</a>
            <a href="#" className="text-[#0f172a] hover:text-blue-700">Faculty</a>
            <a href="#" className="text-[#0f172a] hover:text-blue-700">Collaboration</a>
            <a href="#" className="text-[#0f172a] hover:text-blue-700">Consultation</a>
            <button className="bg-[#f59e0b] text-[#0f172a] px-4 py-2 rounded-md hover:bg-[#f59e0b]/90">
              Sign in
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#e2e8f0]">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <div>
              <h2 className="text-5xl font-bold text-[#0f172a] mb-6">
                Advanced Research For Industrial IoT
              </h2>
              <p className="text-gray-700 mb-8">
                Pioneering innovative solutions at the intersection of IoT, AI, and
                industrial applications to transform the future of smart
                manufacturing.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-[#0f172a] text-white px-6 py-3 rounded-full hover:bg-[#172554]">
                  Explore Research
                </button>
                <button className="bg-white text-[#f59e0b] border border-[#f59e0b] px-6 py-3 rounded-full hover:bg-amber-50">
                  Join Our Team
                </button>
              </div>
              
              <div className="flex items-center mb-8">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Researcher" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Researcher" />
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80" className="w-12 h-12 rounded-full border-2 border-white" alt="Researcher" />
                </div>
                <p className="ml-4 text-gray-700">20+ Researchers contributing to this initiative</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-md mb-8">
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
            <div className="flex flex-col space-y-8">
              <div className="relative">
                <img 
                  src="/istockphoto-1889533246-1024x1024.jpg" 
                  alt="Woman with laptop" 
                  className="rounded-3xl w-full h-64 object-cover"
                />
              </div>
              
 {/* Event Details */}
<div className="bg-white p-6 rounded-xl shadow-md w-[550px] h-auto flex flex-col justify-between">
  <h3 className="text-xl font-bold text-[#0f172a] mb-4 text-center">Event Details</h3>
  
  {/* Inner event sections */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3">
    <h4 className="font-semibold text-[#0f172a]">IoT Symposium</h4>
    <p className="text-gray-700 text-sm">Join industry leaders to discuss cutting-edge IoT advancements.</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3">
    <h4 className="font-semibold text-[#0f172a]">AI in Manufacturing</h4>
    <p className="text-gray-700 text-sm">Explore AI-powered automation in industrial settings.</p>
  </div>

  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
    <h4 className="font-semibold text-[#0f172a]">Smart Devices Workshop</h4>
    <p className="text-gray-700 text-sm">Hands-on training with the latest IoT-enabled devices.</p>
  </div>
</div>


              
              {/* IoT Research Hub Card */}
              <div className="bg-white p-6 rounded-3xl shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-[#fef3c7] p-3 rounded-full">
                    <LightbulbIcon className="h-6 w-6 text-[#d97706]" />
                  </div>
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">IoT Research Hub</h3>
                <p className="text-gray-600 mb-4">Connecting devices, transforming industries</p>
                
                <div className="mb-2">
                  <p className="text-sm text-gray-600 mb-1">Research Progress</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '66%' }}></div>
                  </div>
                </div>
                <p className="text-right text-gray-600">66%</p>
              </div>
              
              
              {/* Additional IoT Researchers Image */}
              <div className="relative rounded-3xl overflow-hidden">
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

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-[#0f172a] font-bold text-xl">
                  CU
                </div>
                <div className="ml-3">
                  <h3 className="text-white font-bold">CHRIST UNIVERSITY</h3>
                  <p className="text-gray-300 text-sm">INSTITUTE OF MANAGEMENT</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Pioneering research in Industrial IoT and smart technologies for a better tomorrow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a]">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a]">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a]">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#172554] p-2 rounded-full hover:bg-[#1e3a8a]">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-[#f59e0b] font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Faculty</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Collaboration</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Consultation</a></li>
              </ul>
            </div>
            
            {/* Contact Us */}
            <div>
              <h3 className="text-[#f59e0b] font-bold text-xl mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-300 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    CHRIST (Deemed to be University)<br />
                    Kengeri Campus, Bangalore<br />
                    Karnataka - 560074
                  </p>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">+91 80 4012 9100</p>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">research@christuniversity.in</p>
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="border-[#172554] mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 CHRIST (Deemed to be University). All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
