"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Mail,
  Cpu,
  X,
  BookOpen,
  Award,
  FileText,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin as LocationIcon,
  Phone,
  AtSign,
} from "lucide-react";

interface Faculty {
  id: number;
  name: string;
  title: string;
  cabin: string;
  email: string;
  image: string;
  education: string[];
  research: string[];
  publications: string[];
}

function App() {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Add or remove overflow: hidden from the body based on modal state
  useEffect(() => {
    if (selectedFaculty) {
      document.body.classList.add("no-scrollbar");
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.classList.remove("no-scrollbar");
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.classList.remove("no-scrollbar");
      document.body.style.overflow = "auto";
    };
  }, [selectedFaculty]);

  // Handle click outside modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedFaculty(null);
      }
    }

    // Add event listener if modal is open
    if (selectedFaculty) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedFaculty]);

  const facultyMembers: Faculty[] = [
    {
      id: 1,
      name: "Dr. Rakoth Kandan Sambandam",
      title: "(Dept of CSE)",
      cabin: "220/10,FIRST Floor,BLOCK II",
      email: "rakoth.kandan@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5163.jpg",
      education: [
        "PhD from Annamalai University",
        "M.Tech in CSE",
        "BE in ECE",
      ],
      research: ["AI Based Placement Bot"],
      publications: [
        "Optimized Multi-Scale Attention Convolutional Neural Network for Micro-Grid Energy Management System Employing in Internet of Things",
        "A Comprehensive Review of Small Building Detection in Collapsed Images: Advancements and Applications of Machine Learning Algorithms",
        "Smart Air Pollution Monitoring System Using Arduino Based on Wireless Sensor Networks",
        "Secure Identity Based Authentication for Emergency Communications",
        "Comparison of Machine Learning-Based Intrusion Detection Systems Using UNSW-NB15 Dataset",
        "Review on Image Processing-Based Building Damage Assessment Techniques",
        "An Advanced and Ideal Method for Tumor Detection and Classification from MRI Image Using Gamma Distribution and Support Vector Machine",
        "Applications of Classification and Recommendation Techniques to Analyze Soil Data and Water Using IOT",
        "3D CNN-Based Classification of Severity in COVID-19 Using CT Images",
        "Security Issues in Intrusion Detection - Review",
        "Smart Precision Irrigation Techniques Using Wireless Underground Sensors in Wireless Sensors",
        "Self-adaptive dragonfly based optimal thresholding for multilevel segmentation of digital images",
      ],
    },
    {
      id: 2,
      name: "Dr. Shamanth N",
      title: "(Dept of CSE)",
      cabin: "51,GROUND Floor,BLOCK III",
      email: "shamanth.n@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5581.jpg",
      education: [
        "PhD from BITS Pilani",
        "M.Tech in Computer Network Engineering",
        "B.Tech in CSE",
      ],
      research: [
        "Development of AI Enabled Contactless Remote Health Monitoring System for Neonatal care",
      ],
      publications: [
        "Cost Effective and Energy Efficient Drip Irrigation System for IoT Enabled Smart Agriculture",
        "Augmented Reality based Navigation for Indoor Environment using Unity Platform",
        "Energy-Efficient Long-Range Sectored Antenna for Directional Sensor Network Applications",
        "Dynamic Channel Allocation in Wireless Personal Area Networks for Industrial IoT Applications",
        "Multiple token-based neighbor discovery for directional sensor networks",
        "Hybrid area exploration?based mobility-assisted localization with sectored antenna in wireless sensor networks",
        "Mobility assisted localization for mission critical Wireless Sensor Network applications using hybrid area exploration approach",
        "A Band-notched Ultra-wideband Compact Planar Monopole Antenna With U-shaped Parasitic Element",
      ],
    },
    {
      id: 3,
      name: "Dr. Manu Elappila",
      title: "(Dept of CSE)",
      cabin: "250/34,THIRD Floor,BLOCK II",
      email: "manu.elappila@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5177.jpg",
      education: ["Ph.D from NIT Rourkela", "M.Tech in CSE", "B.Tech in IT"],
      research: [
        "Development of AI Enabled Contactless Remote Health Monitoring System for Neonatal care",
      ],
      publications: [
        "Cost Effective and Energy Efficient Drip Irrigation System for IoT Enabled Smart Agriculture",
        "Augmented Reality based Navigation for Indoor Environment using Unity Platform",
        "Implementation of survivability aware protocols in WSN for IoT applications using Contiki-OS and hardware testbed evaluation",
        "Dynamic Channel Allocation in Wireless Personal Area Networks for Industrial IoT Applications",
        "Survivability Aware Channel Allocation in WSN for IoT applications",
        "Survivable Path Routing in WSN for IoT applications",
      ],
    },
    // Moving Dr. Venkataswamy R (the last faculty) to the middle position
    {
      id: 6,
      name: "Dr. Venkataswamy R",
      title: "(Dept of EEE)",
      cabin: "88,THIRD Floor,BLOCK III",
      email: "venkataswamy.r@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E1737.jpg",
      education: [
        "Ph.D from Visvesvaraya Technological University",
        "M.Tech in Control and Computing",
        "B.E in EEE",
      ],
      research: [
        "Retrofitting of conventional CNC Milling Machine to digitalized transformation for smart manufacturing",
      ],
      publications: [
        "Realization of Humanoid Doctor and Real-Time Diagnostics of Disease Using Internet of Things, Edge Impulse Platform, and ChatGPT",
        "Transformer performance enhancement by optimized charging strategy for electric vehicles",
        "nternet of things based metaheuristic reliability centered maintenance of distribution transformers",
        "Development of Internet of Things Platform and Its Application in Remote Monitoring and Control of Transformer Operation",
        "Optimal Charging Strategy for Spatially Distributed Electric Vehicles in Power System by Remote Analyser",
        "Internet of Things Based Autonomous Borewell Management System",
      ],
    },
    {
      id: 4,
      name: "Prof. Sharon Roji Priya C",
      title: "(Dept of CSE)",
      cabin: "48,GROUND Floor,BLOCK III",
      email: "sharon.roji@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6206.jpg",
      education: ["M.E CSE", "B.E CSE"],
      research: [],
      publications: [
        "Classification of HHO-based Machine Learning Techniques for Clone Attack Detection in WSN",
      ],
    },
    {
      id: 5,
      name: "Prof. Shruti Jalapur",
      title: "(Dept of CSE)",
      cabin: "636,193,Fourth Floor,BLOCK VI",
      email: "shruti.jalapur@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6692.jpg",
      education: ["M.Tech in CSE", "B.E in CSE"],
      research: [],
      publications: [
        "An Integrated Scalable Healthcare Management System Using IOT",
        "Text Summarization Techniques for Kannada Language",
      ],
    },
    {
      id: 7,
      name: "Dr. Praghash K",
      title: "(Dept of ECE)",
      cabin: "19,GROUND Floor,DEVADAN BLOCK",
      email: "praghash.k@christuniversity.in",
      image:
        "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5933.jpg",
      education: [
        "Ph.D from Anna University",
        "M.Tech in Communication Systems",
        "B.E in ECE",
      ],
      research: [
        "VRSMT Steiner Minimum Tree based routing protocol to mitigate the bottleneck in WSN",
        "Indian Road Safety Enhancement using Adaptive Driver Assistance and Communication System",
      ],
      publications: [
        "An extensive critique on expert system control in solar photovoltaic dominated microgrids",
        "Development of an Efficient and Secured E-Voting Mobile Application Using Android",
        "A Modified Seven-Level Inverter with Inverted Sine Wave Carrier for PWM Control",
        "Optimization and Design of a Sustainable Industrial Grid System",
        "Implementation and Investigation of an Optimal Full Adder Design for Low Power and Reduced Delay Conditions",
        "An efficient MIMO cognitive radio (CR) model for mid-band 5G applications",
        "Comprehensive Assessment of Electric Vehicle Development, Deployment, and Policy Initiatives to Reduce GHG Emissions: Opportunities and Challenges",
        "CMY Color Spaced-Based Visual Cryptography Scheme for Secret Sharing of Data",
        "Integrating renewable energy in electric V2G: Improved optimization assisting dispatch model",
        "A Combined PWM and AEM-Based AC Voltage Controller for Resistive Loads",
        "Data Privacy Preservation and Trade-off Balance Between Privacy and Utility Using Deep Adaptive Clustering and Elliptic Curve Digital Signature Algorithm",
        "Improved Authentication in Secured Multicast Wireless Sensor Network (MWSN) Using Opposition Frog Leaping Algorithm to Resist Man-in-Middle Attack",
        "An Investigation of Garbage Disposal Electric Vehicles (GDEVs) Integrated with Deep Neural Networking (DNN) and Intelligent Transportation System (ITS) in Smart City Management System (SCMS)",
      ],
    },
  ];

  // Function to handle navigation
  const navigateTo = (path: string) => {
    // Use window.location for navigation
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-slate-200">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div
            onClick={() => navigateTo("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294"
              alt="Christ University Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="font-bold text-[#1e2949] text-lg">
                CHRIST UNIVERSITY
              </h1>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <div
            onClick={() => navigateTo("/")}
            className="text-[#1e2949] hover:text-[#1e2949]/80 cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => navigateTo("/about")}
            className="text-[#1e2949] hover:text-[#1e2949]/80 cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => navigateTo("/faculty")}
            className="text-[#1e2949] hover:text-[#1e2949]/80 font-medium cursor-pointer"
          >
            Faculty
          </div>
          <div
            onClick={() => navigateTo("/collaboration")}
            className="text-[#1e2949] hover:text-[#1e2949]/80 cursor-pointer"
          >
            Collaboration
          </div>
          <div
            onClick={() => navigateTo("/consultation")}
            className="text-[#1e2949] hover:text-[#1e2949]/80 cursor-pointer"
          >
            Consultation
          </div>
        </nav>

        <div className="flex items-center">
          <div className="bg-amber-400 rounded-full p-2">
            <Cpu className="h-5 w-5 text-white" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1e2949] mb-2">
            Advanced Research For Industrial IoT
          </h1>
          <p className="text-[#7f8899] max-w-2xl mb-8">
            Pioneering innovative solutions at the intersection of IoT, AI, and
            industrial applications to transform the future of smart
            manufacturing.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-[#1e2949] mb-8">
          Faculty Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((faculty, index) => (
            <div
              key={faculty.id}
              className={`
        bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300
        ${index === 6 ? "md:col-start-2 md:col-end-3" : ""} // Add this line
      `}
            >
              {/* Card content remains the same */}
              <div className="bg-slate-100 p-8 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-[#1e2949] text-xl">
                  {faculty.name}
                </h3>
                <p className="text-[#7f8899]">{faculty.title}</p>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                  <p className="text-[#7f8899] text-sm">{faculty.cabin}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-[#1e2949] hover:underline text-sm"
                  >
                    {faculty.email}
                  </a>
                </div>
                <div className="mt-5 flex justify-center">
                  <button
                    className="text-[#1e2949] hover:text-[#1e2949]/80 text-sm font-medium"
                    onClick={() => setSelectedFaculty(faculty)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Faculty Profile Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: "none" }} /* Firefox */
          >
            {/* Add this style to hide the scrollbar in webkit browsers */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="relative h-full">
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 z-10"
                onClick={() => setSelectedFaculty(null)}
              >
                <X className="h-6 w-6 text-[#1e2949]" />
              </button>

              <div className="bg-[#d8dee3] p-8 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img
                    src={selectedFaculty.image}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-4 font-bold text-[#1e2949] text-2xl">
                  {selectedFaculty.name}
                </h2>
                <p className="text-[#7f8899]">{selectedFaculty.title}</p>
              </div>

              <div className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                  <p className="text-[#7f8899]">{selectedFaculty.cabin}</p>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="text-[#1e2949] hover:underline"
                  >
                    {selectedFaculty.email}
                  </a>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-[#1e2949]" />
                    <h3 className="font-bold text-[#1e2949] text-lg">
                      Education
                    </h3>
                  </div>
                  <ul className="list-disc pl-10 space-y-1">
                    {selectedFaculty.education.map(
                      (edu: string, index: number) => (
                        <li key={index} className="text-[#7f8899]">
                          {edu}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Only show Research Project section if there are research items */}
                {selectedFaculty.research.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-[#1e2949]" />
                      <h3 className="font-bold text-[#1e2949] text-lg">
                        Research Project
                      </h3>
                    </div>
                    <ul className="list-disc pl-10 space-y-1">
                      {selectedFaculty.research.map(
                        (research: string, index: number) => (
                          <li key={index} className="text-[#7f8899]">
                            {research}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-[#1e2949]" />
                    <h3 className="font-bold text-[#1e2949] text-lg">
                      Publications
                    </h3>
                  </div>
                  <ul className="list-disc pl-10 space-y-2">
                    {selectedFaculty.publications.map(
                      (pub: string, index: number) => (
                        <li key={index} className="text-[#7f8899]">
                          {pub}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer - Updated to match the design in the image */}
      <footer className="mt-16">
        {/* New Footer Design */}
        <div className="bg-[#0a1633] text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo and Description */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294"
                    alt="Christ University Logo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="font-bold text-white text-lg">
                      CHRIST UNIVERSITY
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-6">
                  Pioneering research in Industrial IoT and smart technologies
                  for a better tomorrow.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-300">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-amber-400 font-medium mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <div
                      onClick={() => navigateTo("/")}
                      className="text-gray-300 hover:text-white text-sm cursor-pointer"
                    >
                      Home
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => navigateTo("/about")}
                      className="text-gray-300 hover:text-white text-sm cursor-pointer"
                    >
                      About Us
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => navigateTo("/faculty")}
                      className="text-gray-300 hover:text-white text-sm cursor-pointer"
                    >
                      Faculty
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => navigateTo("/collaboration")}
                      className="text-gray-300 hover:text-white text-sm cursor-pointer"
                    >
                      Collaboration
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={() => navigateTo("/consultation")}
                      className="text-gray-300 hover:text-white text-sm cursor-pointer"
                    >
                      Consultation
                    </div>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-amber-400 font-medium mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <LocationIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      CHRIST (Deemed to be University)
                      <br />
                      Kengeri Campus, Bangalore
                      <br />
                      Karnataka - 560074
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <p className="text-sm text-gray-300">+91 80 4012 9100</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <AtSign className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a
                      href="mailto:research@christuniversity.in"
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      research@christuniversity.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-[#071328] text-gray-400 py-4 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs">
                © 2025 CHRIST (Deemed to be University). All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="text-xs hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs hover:text-white">
                  Terms of Use
                </a>
                <a href="#" className="text-xs hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
