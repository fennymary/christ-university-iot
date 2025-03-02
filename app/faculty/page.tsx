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
      name: "Dr. Angela",
      title: "(Dept of CSE)",
      cabin: "Cabin-D.3rd block,2nd floor",
      email: "angela@christ.in",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      education: [
        "Ph.D. in Computer Science, Stanford University",
        "M.S. in Computer Engineering, MIT",
        "B.Tech in Computer Science, IIT Delhi",
      ],
      research: [
        "Machine Learning for IoT Applications",
        "Edge Computing Frameworks",
        "Distributed Systems",
      ],
      publications: [
        'Angela et al. (2024). "Advanced IoT Frameworks for Smart Cities", IEEE IoT Journal',
        'Angela & Kumar (2023). "Machine Learning at the Edge", ACM Computing Surveys',
        'Singh, Angela et al. (2022). "Distributed Computing for IoT", International Conference on IoT',
      ],
    },
    {
      id: 2,
      name: "Dr. Samuel J",
      title: "(Dept of CSE)",
      cabin: "Cabin-23, second block,2nd floor",
      email: "samuel@christ.in",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      education: [
        "Ph.D. in Artificial Intelligence, Carnegie Mellon University",
        "M.S. in Computer Science, University of California, Berkeley",
        "B.E. in Information Technology, Anna University",
      ],
      research: [
        "Natural Language Processing",
        "Computer Vision",
        "AI for Healthcare",
      ],
      publications: [
        'Samuel et al. (2024). "Transformer Models for Medical Diagnosis", Nature Machine Intelligence',
        'Samuel & Johnson (2023). "Vision Transformers in Healthcare", IEEE Transactions on Medical Imaging',
        'Williams, Samuel et al. (2022). "NLP for Clinical Decision Support", Journal of Biomedical Informatics',
      ],
    },
    {
      id: 3,
      name: "Prof. Elizabeth S",
      title: "(Dept of CSE)",
      cabin: "Cabin-03,first block,3rd floor",
      email: "elizabeth@christ.in",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      education: [
        "Ph.D. in Data Science, ETH Zurich",
        "M.S. in Statistics, London School of Economics",
        "B.Sc in Mathematics, University of Oxford",
      ],
      research: [
        "Big Data Analytics",
        "Statistical Learning",
        "Data Visualization",
      ],
      publications: [
        'Elizabeth et al. (2024). "Statistical Methods for Large-Scale Data", Journal of Big Data',
        'Elizabeth & Chen (2023). "Visualization Techniques for Complex Data", IEEE Transactions on Visualization',
        'Roberts, Elizabeth et al. (2022). "Interactive Data Exploration", ACM CHI Conference',
      ],
    },
    {
      id: 4,
      name: "Dr. Michael Chen",
      title: "(Dept of CSE)",
      cabin: "Cabin-12, first block,1st floor",
      email: "michael@christ.in",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      education: [
        "Ph.D. in Computer Networks, University of California, San Diego",
        "M.S. in Electrical Engineering, Georgia Tech",
        "B.Tech in Electronics, Tsinghua University",
      ],
      research: [
        "Network Security",
        "Wireless Communications",
        "Internet of Things",
      ],
      publications: [
        'Chen et al. (2024). "Secure IoT Communication Protocols", IEEE Network',
        'Chen & Smith (2023). "Lightweight Encryption for IoT", ACM Transactions on IoT',
        'Johnson, Chen et al. (2022). "5G for IoT Applications", IEEE Communications Magazine',
      ],
    },
    {
      id: 5,
      name: "Prof. Sarah Kim",
      title: "(Dept of CSE)",
      cabin: "Cabin-15, third block,2nd floor",
      email: "sarah@christ.in",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      education: [
        "Ph.D. in Human-Computer Interaction, University of Washington",
        "M.S. in Interaction Design, Royal College of Art",
        "B.Des in Digital Design, KAIST",
      ],
      research: ["User Experience Design", "Accessibility", "Mobile Computing"],
      publications: [
        'Kim et al. (2024). "Inclusive Design for IoT Interfaces", ACM Transactions on Accessible Computing',
        'Kim & Garcia (2023). "Mobile UX for Diverse Users", International Journal of Human-Computer Studies',
        'Lee, Kim et al. (2022). "Designing for Accessibility", ACM ASSETS Conference',
      ],
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      title: "(Dept of CSE)",
      cabin: "Cabin-08, second block,3rd floor",
      email: "james@christ.in",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      education: [
        "Ph.D. in Software Engineering, University of Toronto",
        "M.S. in Computer Science, University of Edinburgh",
        "B.Sc in Computing, Imperial College London",
      ],
      research: ["Software Architecture", "DevOps", "Cloud Computing"],
      publications: [
        'Wilson et al. (2024). "Microservices for IoT Systems", IEEE Software',
        'Wilson & Brown (2023). "DevOps Practices for Edge Computing", Journal of Systems and Software',
        'Taylor, Wilson et al. (2022). "Cloud-Native IoT Architectures", IEEE Cloud Computing',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-200">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
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

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-[#1e2949] hover:text-[#1e2949]/80">
            Home
          </a>
          <a href="#" className="text-[#1e2949] hover:text-[#1e2949]/80">
            About
          </a>
          <a
            href="#"
            className="text-[#1e2949] hover:text-[#1e2949]/80 font-medium"
          >
            Faculty
          </a>
          <a href="#" className="text-[#1e2949] hover:text-[#1e2949]/80">
            Collaboration
          </a>
          <a href="#" className="text-[#1e2949] hover:text-[#1e2949]/80">
            Consultation
          </a>
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
          {facultyMembers.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-slate-100 p-8 flex flex-col items-center">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
                />
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
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
                />
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

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-[#1e2949]" />
                    <h3 className="font-bold text-[#1e2949] text-lg">
                      Research Areas
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
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Faculty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Collaboration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      Consultation
                    </a>
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
