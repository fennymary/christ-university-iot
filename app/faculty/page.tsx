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
import directorImage from "../assets/2178.png";

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
  const [facultyMembers, setFacultyMembers] = useState<Faculty[]>([]);
  const [director, setDirector] = useState<Faculty | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeNavItem, setActiveNavItem] = useState<string>("faculty");

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch both data in parallel
        const [facultiesRes, directorRes] = await Promise.all([
          fetch('/api/faculties'),
          fetch('/api/director')
        ]);

        if (!facultiesRes.ok) throw new Error('Failed to fetch faculties');
        if (!directorRes.ok) throw new Error('Failed to fetch director');

        const [facultiesData, directorData] = await Promise.all([
          facultiesRes.json(),
          directorRes.json()
        ]);

        setFacultyMembers(facultiesData);
        // Check if directorData is an array and get the first item
        if (Array.isArray(directorData) && directorData.length > 0) {
          setDirector(directorData[0]);
        } else {
          setDirector(directorData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add or remove overflow: hidden from the body based on modal state
  useEffect(() => {
    if (selectedFaculty) {
      document.body.classList.add("no-scrollbar");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scrollbar");
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.classList.remove("no-scrollbar");
      document.body.style.overflow = "auto";
    };
  }, [selectedFaculty]);

  // Handle click outside modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedFaculty(null);
      }
    }

    if (selectedFaculty) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedFaculty]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e2949] mx-auto"></div>
          <p className="mt-4 text-[#1e2949]">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-200 flex items-center justify-center">
        <div className="text-center p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-[#7f8899] mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#1e2949] text-white rounded hover:bg-[#1e2949]/90"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-200">
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

        {director && (
          <>
            <h2 className="text-3xl font-bold text-[#1e2949] mb-8">
              Director (ARIIOT)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
              <div className="md:col-start-2 md:col-end-3">
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="bg-slate-100 p-8 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-bold text-[#1e2949] text-xl">
                      {director.name}
                    </h3>
                    <p className="text-[#7f8899]">{director.title}</p>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-[#1e2949] mt-0.5 flex-shrink-0" />
                      <p className="text-[#7f8899] text-sm">
                        {director.cabin}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#1e2949] flex-shrink-0" />
                      <a
                        href={`mailto:${director.email}`}
                        className="text-[#1e2949] hover:underline text-sm"
                      >
                        {director.email}
                      </a>
                    </div>
                    <div className="mt-5 flex justify-center">
                      <button
                        className="text-[#1e2949] hover:text-[#1e2949]/80 text-sm font-medium"
                        onClick={() => setSelectedFaculty(director)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <h2 className="text-3xl font-bold text-[#1e2949] mb-8">
          Faculty Members
        </h2>

        {facultyMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
              <div
                key={faculty.id}
                className={`
                  bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300
                  ${index === 6 ? "md:col-start-2 md:col-end-3" : ""}
                `}
              >
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
        ) : (
          <div className="text-center py-8">
            <p className="text-[#7f8899]">No faculty members found</p>
          </div>
        )}
      </main>

      {/* Faculty Profile Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
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
                    {selectedFaculty.education && selectedFaculty.education.map((edu, index) => (
                      <li key={index} className="text-[#7f8899]">
                        {edu}
                      </li>
                    ))}
                    {!selectedFaculty.education && (
                      <li className="text-[#7f8899]">No education information available</li>
                    )}
                  </ul>
                </div>

                {selectedFaculty.research && selectedFaculty.research.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-[#1e2949]" />
                      <h3 className="font-bold text-[#1e2949] text-lg">
                        Research Project
                      </h3>
                    </div>
                    <ul className="list-disc pl-10 space-y-1">
                      {selectedFaculty.research.map((research, index) => (
                        <li key={index} className="text-[#7f8899]">
                          {research}
                        </li>
                      ))}
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
                    {selectedFaculty.publications && selectedFaculty.publications.map((pub, index) => (
                      <li key={index} className="text-[#7f8899]">
                        {pub}
                      </li>
                    ))}
                    {!selectedFaculty.publications && (
                      <li className="text-[#7f8899]">No publications available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;