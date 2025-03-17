"use client";
import React from "react";
import {
  GraduationCap,
  MapPin,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

function App() {
  const students = [
    { name: "John Doe", batch: "2023", company: "Google", package: "24 LPA" },
    {
      name: "Jane Smith",
      batch: "2023",
      company: "Microsoft",
      package: "22 LPA",
    },
    {
      name: "Mike Johnson",
      batch: "2023",
      company: "Amazon",
      package: "20 LPA",
    },
    // Add more students as needed
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}

      <main className="container mx-auto px-4 py-8">
        {/* Featured Student */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/JoshuaPKKurian.jpg"
              alt="Student Profile"
              className="rounded-full w-48 h-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">Joshua PK Kurian</h2>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={20} />
                <span>Intern at AdvanTech</span>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-[#ffd700] pl-4">
                "The Advanced Research IoT Lab at CHRIST University provided me
                with the perfect blend of theoretical knowledge and practical
                experience.I'm forever grateful for the
                guidance and support from the faculty."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="bg-[#0a192f] text-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Program</h2>
          <p className="mb-6">
            Are you interested in being part of our success story? Register now
            for our upcoming batch!
          </p>
          <a
            href="https://forms.google.com/your-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#0a192f] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5c100] transition-colors"
          >
            Register Now
            <ExternalLink size={20} />
          </a>
        </section>

        {/* Student List */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Successful Students</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0a192f] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Batch</th>
                  <th className="px-6 py-3 text-left">Company</th>
                  <th className="px-6 py-3 text-left">Package</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.batch}</td>
                    <td className="px-6 py-4">{student.company}</td>
                    <td className="px-6 py-4">{student.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}

export default App;
