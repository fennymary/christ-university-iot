"use client";
import React from 'react';
import { Bell, LightbulbIcon, Search, Users, BookOpen, Award, ArrowRight, Lightbulb, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header/Navigation */}
      <header className="bg-white py-4 px-6 md:px-12 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294" 
                alt="Christ University Logo" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-navy-900 font-bold text-lg">CHRIST UNIVERSITY</h1>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/home" className="text-slate-600 hover:text-navy-900">Home</a>
              <a href="/about" className="text-amber-500 font-medium">About</a>
              <a href="/faculty" className="text-slate-600 hover:text-navy-900">Faculty</a>
              <a href="/collaboration" className="text-slate-600 hover:text-navy-900">Collaboration</a>
              <a href="/consultation" className="text-slate-600 hover:text-navy-900">Consultation</a>
            </nav>
            
            <div className="flex items-center">
              <div className="bg-amber-400 rounded-full p-2">
                <Bell className="text-white h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="bg-amber-200 text-amber-800 text-xs font-medium px-3 py-1 rounded-full mr-3">New</div>
            <p className="text-slate-600">Research Initiative 2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
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
                <p className="text-slate-600 ml-4">20+ Researchers contributing to this initiative</p>
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

           
          
          </div>
        </div>
      </section>

      {/* Research Team Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-900">Research Team</h2>
            <a href="#" className="text-amber-500 hover:text-amber-600 flex items-center">
              View all team members
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-48 bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
                  alt="Dr. James Wilson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900">Dr. James Wilson</h3>
                <p className="text-amber-500">Laboratory Director</p>
                <p className="text-slate-600 mt-3 text-sm">
                  Ph.D. in Computer Science with 15+ years of experience in IoT systems and industrial automation.
                </p>
                <div className="mt-4 flex space-x-3">
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">AI</div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">IoT</div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Edge Computing</div>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-48 bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
                  alt="Dr. Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900">Dr. Sarah Chen</h3>
                <p className="text-amber-500">Senior Researcher</p>
                <p className="text-slate-600 mt-3 text-sm">
                  Specializes in industrial sensor networks and real-time data processing for manufacturing systems.
                </p>
                <div className="mt-4 flex space-x-3">
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Sensors</div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Data Analytics</div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Manufacturing</div>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="h-48 bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80" 
                  alt="Prof. Michael Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900">Prof. Michael Rodriguez</h3>
                <p className="text-amber-500">Research Associate</p>
                <p className="text-slate-600 mt-3 text-sm">
                  Expert in supply chain optimization and blockchain applications for industrial IoT security.
                </p>
                <div className="mt-4 flex space-x-3">
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Blockchain</div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Security</div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600">Supply Chain</div>
                </div>
              </div>
            </div>
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
                      Developing a digital twin environment for testing IoT implementations before physical deployment.
                    </p>
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-slate-500">Progress</span>
                        <span className="text-xs text-slate-500">75%</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start mt-6">
                  <div className="bg-amber-100 rounded-full p-1 mt-1">
                    <div className="bg-amber-400 rounded-full w-2 h-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-navy-900">Secure IoT Communication Protocol</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Researching lightweight encryption methods for resource-constrained IoT devices in industrial settings.
                    </p>
                    <div className="mt-2">
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-slate-500">Progress</span>
                        <span className="text-xs text-slate-500">40%</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-900">Publications</h2>
            <a href="#" className="text-amber-500 hover:text-amber-600 flex items-center">
              View all publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Publication 1 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Award className="h-5 w-5 text-navy-900" />
                </div>
                <span className="text-sm text-slate-500">June 2025</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mt-4">Enhancing Industrial IoT Security Through Federated Learning Approaches</h3>
              <p className="text-slate-600 text-sm mt-2">
                Published in IEEE Transactions on Industrial Informatics
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80" 
                  alt="Dr. James Wilson"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-slate-600 ml-2">Dr. James Wilson, et al.</span>
              </div>
              <a href="#" className="mt-4 text-amber-500 hover:text-amber-600 text-sm flex items-center">
                Read publication
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
            
            {/* Publication 2 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Award className="h-5 w-5 text-navy-900" />
                </div>
                <span className="text-sm text-slate-500">March 2025</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mt-4">Real-time Anomaly Detection in Manufacturing Processes Using Edge AI</h3>
              <p className="text-slate-600 text-sm mt-2">
                Published in Journal of Smart Manufacturing
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80" 
                  alt="Dr. Sarah Chen"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-slate-600 ml-2">Dr. Sarah Chen, et al.</span>
              </div>
              <a href="#" className="mt-4 text-amber-500 hover:text-amber-600 text-sm flex items-center">
                Read publication
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
            
            {/* Publication 3 */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Award className="h-5 w-5 text-navy-900" />
                </div>
                <span className="text-sm text-slate-500">January 2025</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mt-4">Blockchain-based Supply Chain Verification for Industrial IoT Ecosystems</h3>
              <p className="text-slate-600 text-sm mt-2">
                Published in Blockchain for Industrial Applications
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80" 
                  alt="Prof. Michael Rodriguez"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-slate-600 ml-2">Prof. Michael Rodriguez, et al.</span>
              </div>
              <a href="#" className="mt-4 text-amber-500 hover:text-amber-600 text-sm flex items-center">
                Read publication
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1b3d] text-white py-12 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-[#0a1b3d] font-bold">
                  <span>CU</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">CHRIST UNIVERSITY</h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-6">
                Pioneering research in Industrial IoT and smart technologies for a better tomorrow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#1e2e4d] p-2 rounded-full hover:bg-[#2a3e63] transition-colors">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#1e2e4d] p-2 rounded-full hover:bg-[#2a3e63] transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#1e2e4d] p-2 rounded-full hover:bg-[#2a3e63] transition-colors">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#1e2e4d] p-2 rounded-full hover:bg-[#2a3e63] transition-colors">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Faculty</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Collaboration</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    CHRIST (Deemed to be University)<br />
                    Kengeri Campus, Bangalore<br />
                    Karnataka - 560074
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">+91 80 4012 9100</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">research@christuniversity.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1e2e4d] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 CHRIST (Deemed to be University). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;