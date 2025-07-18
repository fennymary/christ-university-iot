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
  const classLinks = [
    {
      className: "3BTCS IOT",
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/1ZVB5T33p9ovUmFRNcMqbsETMwayKj31n/edit?gid=1373998895#gid=1373998895",
    },
    {
      className: "5BTCS IOT",
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/1ZVB5T33p9ovUmFRNcMqbsETMwayKj31n/edit?gid=157598850#gid=157598850",
    },
    {
      className: "7BTCS IOT",
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/1ZVB5T33p9ovUmFRNcMqbsETMwayKj31n/edit?gid=1764432654#gid=1764432654",
    },
    {
      className: "Alumini",
      spreadsheetUrl:
        "https://docs.google.com/spreadsheets/d/1ZVB5T33p9ovUmFRNcMqbsETMwayKj31n/edit?gid=1794057867#gid=1794057867",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e0e0e1]">
      {/* Header */}

      <main className="container mx-auto px-4 py-8">
        {/* Featured Student */}
        <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/jos.png"
              alt="Student Profile"
              className="rounded-full w-48 h-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">Joshua PK Kurian</h2>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={20} />
                <span>Intern at Advantech</span>
              </div>
              <blockquote className="text-gray-700 italic border-l-4 border-[#ffd700] pl-4">
                "The Advanced Research IoT Lab at CHRIST University provided me
                with the perfect blend of theoretical knowledge and practical
                experience. I'm forever grateful for the guidance and support
                from the faculty."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section className="bg-[#0a192f] text-white rounded-lg shadow-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Program</h2>
          <p className="mb-6">
            Are you interested in being part of our success story? Register now
            for our upcoming batch!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSceVLk5J9jvoww-q1eUqq17CNkuBrnru35GaEFh-XsNXbQ6vw/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ffd700] text-[#0a192f] px-6 py-3 rounded-lg font-semibold hover:bg-[#e5c100] transition-colors"
          >
            Register Now
            <ExternalLink size={20} />
          </a>
        </section>

        {/* Student List */}
        <section className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Student List</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0a192f] text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Class</th>
                  <th className="px-6 py-3 text-left">List of students</th>
                </tr>
              </thead>
              <tbody>
                {classLinks.map((classInfo, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">
                      {classInfo.className}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={classInfo.spreadsheetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                      >
                        View List
                        <ExternalLink size={16} />
                      </a>
                    </td>
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
