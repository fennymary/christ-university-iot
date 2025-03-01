"use client";
import React, { useState } from "react";
import { MapPin, Mail, Cpu, X, BookOpen, Award, FileText } from "lucide-react";

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
  // Add other faculty members here...

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
            <h1 className="font-bold text-blue-900 text-lg">
              CHRIST UNIVERSITY
            </h1>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-800 hover:text-blue-900">
            Home
          </a>
          <a href="#" className="text-blue-800 hover:text-blue-900">
            About
          </a>
          <a href="#" className="text-blue-800 hover:text-blue-900 font-medium">
            Faculty
          </a>
          <a href="#" className="text-blue-800 hover:text-blue-900">
            Collaboration
          </a>
          <a href="#" className="text-blue-800 hover:text-blue-900">
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
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Advanced Research For Industrial IoT
          </h1>
          <p className="text-blue-800 max-w-2xl mb-8">
            Pioneering innovative solutions at the intersection of IoT, AI, and
            industrial applications to transform the future of smart
            manufacturing.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-blue-900 mb-8">
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
                <h3 className="mt-4 font-bold text-blue-900 text-xl">
                  {faculty.name}
                </h3>
                <p className="text-blue-700">{faculty.title}</p>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800 text-sm">{faculty.cabin}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {faculty.email}
                  </a>
                </div>
                <div className="mt-5 flex justify-center">
                  <button
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
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
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                onClick={() => setSelectedFaculty(null)}
              >
                <X className="h-6 w-6 text-blue-900" />
              </button>

              <div className="bg-blue-50 p-8 flex flex-col items-center">
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
                />
                <h2 className="mt-4 font-bold text-blue-900 text-2xl">
                  {selectedFaculty.name}
                </h2>
                <p className="text-blue-700">{selectedFaculty.title}</p>
              </div>

              <div className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-blue-800">{selectedFaculty.cabin}</p>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {selectedFaculty.email}
                  </a>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <h3 className="font-bold text-blue-900 text-lg">
                      Education
                    </h3>
                  </div>
                  <ul className="list-disc pl-10 space-y-1">
                    {selectedFaculty.education.map(
                      (edu: string, index: number) => (
                        <li key={index} className="text-blue-800">
                          {edu}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-blue-500" />
                    <h3 className="font-bold text-blue-900 text-lg">
                      Research Areas
                    </h3>
                  </div>
                  <ul className="list-disc pl-10 space-y-1">
                    {selectedFaculty.research.map(
                      (research: string, index: number) => (
                        <li key={index} className="text-blue-800">
                          {research}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <h3 className="font-bold text-blue-900 text-lg">
                      Publications
                    </h3>
                  </div>
                  <ul className="list-disc pl-10 space-y-2">
                    {selectedFaculty.publications.map(
                      (pub: string, index: number) => (
                        <li key={index} className="text-blue-800">
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

      {/* Footer with Lab Venue */}
      <footer className="mt-16">
        {/* Lab Venue Section */}
        <div className="bg-slate-100 py-8 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-6 md:mb-0">
                <h3 className="font-bold text-blue-900 text-lg mb-3">
                  Lab Venue
                </h3>
                <p className="text-blue-800">222, 2nd block, 1st floor</p>
                <a
                  href="https://www.christuniversity.in"
                  className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                >
                  www.christuniversity.in
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-blue-800 hover:text-blue-900 text-sm"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-blue-800 hover:text-blue-900 text-sm"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-blue-800 hover:text-blue-900 text-sm"
                      >
                        Faculty
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-blue-800 hover:text-blue-900 text-sm"
                      >
                        Research
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-blue-900 mb-3">Contact</h3>
                  <p className="text-blue-800 text-sm">Email: info@christ.in</p>
                  <p className="text-blue-800 text-sm">
                    Phone: +91 80 4012 9000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-slate-200 text-blue-800 py-6 px-6 border-t border-gray-300">
          <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4"></div>

              <div>
                <p className="text-blue-700 text-sm">
                  Bangalore Kengeri Campus, Kanmanike, Kumbalgodu, Mysore Road,
                  <br />
                  Bangalore, Karnataka - 560074
                </p>
                <p className="text-blue-600 text-sm mt-2">
                  © 2025 Christ University. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
