"use client";

import React from "react";
import { Users } from "lucide-react";

// Faculty data
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    department: "Dept of CSE",
    cabin: "Cabin: 12, Third Block, 2nd Floor",
    email: "sarah.johnson@university.edu",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    department: "Dept of ECE",
    cabin: "Cabin: 15, Main Block, 3rd Floor",
    email: "michael.chen@university.edu",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    department: "Dept of CSE",
    cabin: "Cabin: 08, Third Block, 1st Floor",
    email: "emily.rodriguez@university.edu",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Prof. David Kim",
    department: "Dept of IoT",
    cabin: "Cabin: 22, Research Block, 4th Floor",
    email: "david.kim@university.edu",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    department: "Dept of AI & ML",
    cabin: "Cabin: 17, Innovation Block, 2nd Floor",
    email: "priya.sharma@university.edu",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Prof. James Wilson",
    department: "Dept of IoT",
    cabin: "Cabin: 05, Main Block, 1st Floor",
    email: "james.wilson@university.edu",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
  },
];

export default function FacultyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1535] via-[#0f2057] to-[#1a3a8f] text-white">
      {/* Header Section */}
      <header className="py-4 px-6 bg-[#0a1535]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded"></div>
            <span className="font-bold text-xl">CHRIST UNIVERSITY</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-yellow-400 transition-colors"
            >
              About
            </a>
            <a href="/faculty" className="text-yellow-400 font-medium">
              Faculty
            </a>
            <a
              href="/collaboration"
              className="hover:text-yellow-400 transition-colors"
            >
              Collaboration
            </a>
            <a
              href="/consultation"
              className="hover:text-yellow-400 transition-colors"
            >
              Consultation
            </a>
          </nav>
          <button className="bg-yellow-400 text-[#0a1535] px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-3xl rotate-12 blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/10 rounded-2xl -rotate-12 blur-xl"></div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Advanced Research For
            <span className="block text-yellow-400 mt-2">Industrial IoT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering innovation through cutting-edge research and industry
            collaboration
          </p>
        </div>

        {/* Faculty Section */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-10 w-2 bg-yellow-400 rounded-full"></div>
            <h2 className="text-3xl font-bold flex items-center">
              <Users className="mr-3 h-8 w-8 text-yellow-400" />
              Faculty
            </h2>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="p-6 text-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100 mr-4">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {faculty.name}
                      </h3>
                      <p className="text-blue-800 font-medium">
                        {faculty.department}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <p className="text-gray-600">{faculty.cabin}</p>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium block"
                    >
                      {faculty.email}
                    </a>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="text-sm text-blue-700 hover:text-blue-900 font-medium flex items-center">
                      View Profile
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1535] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Christ University. All rights reserved.</p>
          <p className="mt-2 text-sm">Advanced Research for Industrial IoT</p>
        </div>
      </footer>
    </div>
  );
}
