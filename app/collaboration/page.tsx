"use client";
import React from "react";
import {
  Building2,
  Users,
  GraduationCap,
  Globe,
  Handshake,
  FileText,
  ArrowRight,
  Award,
  BookOpen,
  Lightbulb,
  Zap,
  Sun,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

interface CollaborationPartner {
  name: string;
  logo: string;
  description: string;
}

interface ResearchProject {
  title: string;
  partners: string[];
  description: string;
  image: string;
}

interface Achievement {
  title: string;
  count: string;
  icon: React.ReactNode;
}

function App() {
  const partners: CollaborationPartner[] = [
    {
      name: "Siemens Technology",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "Collaborating on smart manufacturing solutions and industrial automation technologies.",
    },
    {
      name: "IBM Research",
      logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "Joint research on AI and machine learning applications for industrial IoT systems.",
    },
    {
      name: "Bosch Innovation",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "Developing next-generation sensor technologies and IoT connectivity solutions.",
    },
    {
      name: "Microsoft Research",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description:
        "Cloud computing and edge intelligence for industrial applications.",
    },
  ];

  const projects: ResearchProject[] = [
    {
      title: "Smart Factory Monitoring System",
      partners: ["Siemens Technology", "ISRO"],
      description:
        "Developing an integrated monitoring system that uses IoT sensors and AI to predict maintenance needs and optimize production workflows.",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Sustainable Manufacturing with IoT",
      partners: ["Bosch Innovation", "Indian Institute of Science"],
      description:
        "Research on reducing energy consumption and waste in manufacturing processes through intelligent IoT systems and data analytics.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Edge Computing for Industrial Applications",
      partners: ["Microsoft Research", "Intel Labs"],
      description:
        "Exploring edge computing architectures to enable real-time decision making in industrial environments with limited connectivity.",
      image:
        "https://images.unsplash.com/photo-1563770660941-10a63607957a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Research Partners",
      count: "25+",
      icon: <Handshake className="text-[#d4b47c]" size={32} />,
    },
    {
      title: "Active Projects",
      count: "18",
      icon: <Lightbulb className="text-[#d4b47c]" size={32} />,
    },
    {
      title: "Publications",
      count: "120+",
      icon: <BookOpen className="text-[#d4b47c]" size={32} />,
    },
    {
      title: "Patents Filed",
      count: "12",
      icon: <Award className="text-[#d4b47c]" size={32} />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">


      {/* Hero Section */}
      <div className="bg-[#d7dee4] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#162750]">
              Advanced Research For Industrial IoT
            </h1>
            <p className="text-xl mb-8 text-[#8798ad]">
              Pioneering innovative solutions at the intersection of IoT, AI,
              and industrial applications to transform the future of smart
              manufacturing.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-10 shadow-md">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((item, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-3xl font-bold text-[#162750] mb-1">
                  {item.count}
                </h3>
                <p className="text-[#8798ad]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Types */}
      <section className="py-12 bg-[#d7dee4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#162750]">
              Types of Collaboration
            </h2>
            <p className="text-[#8798ad] max-w-2xl mx-auto">
              We offer multiple ways to collaborate with our research center,
              tailored to meet the needs of different organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#d7dee4] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building2 className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#162750]">
                Industry Partnerships
              </h3>
              <p className="text-[#8798ad]">
                Collaborative research projects with leading technology
                companies to solve real-world industrial challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#d7dee4] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <GraduationCap className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#162750]">
                Academic Alliances
              </h3>
              <p className="text-[#8798ad]">
                Joint research initiatives with universities and research
                institutions worldwide to advance knowledge in IoT.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-[#d7dee4] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#162750]">
                Government Projects
              </h3>
              <p className="text-[#8798ad]">
                Research funded by government agencies to develop technologies
                that address national priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#162750]">
              Featured Collaborative Projects
            </h2>
            <p className="text-[#8798ad] max-w-2xl mx-auto">
              Explore our ongoing research initiatives with partners from around
              the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://via.placeholder.com/600x400?text=Project+Image`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#162750]">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.partners.map((partner, idx) => (
                      <span
                        key={idx}
                        className="bg-[#d7dee4] text-[#162750] text-sm px-3 py-1 rounded-full"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#8798ad] mb-4">{project.description}</p>
                  <a
                    href="#"
                    className="text-[#d4b47c] font-medium flex items-center hover:text-[#162750]"
                  >
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Partners */}
      <section className="py-12 bg-[#d7dee4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#162750]">
              Our Key Partners
            </h2>
            <p className="text-[#8798ad] max-w-2xl mx-auto">
              We collaborate with leading organizations from industry and
              academia to drive innovation in Industrial IoT research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = `https://via.placeholder.com/300x150?text=${partner.name}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                    {partner.name}
                  </h3>
                  <p className="text-[#8798ad]">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#162750]">
              Our Collaboration Process
            </h2>
            <p className="text-[#8798ad] max-w-2xl mx-auto">
              A streamlined approach to establishing and maintaining successful
              research partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#d7dee4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                1. Initial Contact
              </h3>
              <p className="text-[#8798ad]">
                Reach out to our research team to discuss potential
                collaboration opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#d7dee4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                2. Proposal Development
              </h3>
              <p className="text-[#8798ad]">
                Work together to develop a detailed research proposal and
                project plan.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#d7dee4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                3. Agreement
              </h3>
              <p className="text-[#8798ad]">
                Formalize the collaboration through a memorandum of
                understanding or contract.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#d7dee4] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-[#d4b47c]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                4. Project Execution
              </h3>
              <p className="text-[#8798ad]">
                Implement the research project with regular meetings and
                progress reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 bg-[#d7dee4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#162750]">
              Research Focus Areas
            </h2>
            <p className="text-[#8798ad] max-w-2xl mx-auto">
              Our research center specializes in the following key areas of
              Industrial IoT and smart manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 border border-gray-100">
              <div className="bg-[#d7dee4] p-3 rounded-full flex-shrink-0">
                <Zap className="text-[#d4b47c]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                  Smart Energy Management
                </h3>
                <p className="text-[#8798ad]">
                  Developing intelligent systems for optimizing energy
                  consumption in industrial settings, including predictive
                  analytics for energy usage patterns and integration with
                  renewable energy sources.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 border border-gray-100">
              <div className="bg-[#d7dee4] p-3 rounded-full flex-shrink-0">
                <Zap className="text-[#d4b47c]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                  Predictive Maintenance
                </h3>
                <p className="text-[#8798ad]">
                  Creating AI-powered systems that can predict equipment
                  failures before they occur, reducing downtime and maintenance
                  costs while extending the lifespan of industrial machinery.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 border border-gray-100">
              <div className="bg-[#d7dee4] p-3 rounded-full flex-shrink-0">
                <Zap className="text-[#d4b47c]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                  Industrial Cybersecurity
                </h3>
                <p className="text-[#8798ad]">
                  Researching advanced security protocols and frameworks to
                  protect industrial IoT systems from cyber threats, ensuring
                  the integrity and confidentiality of critical infrastructure.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 border border-gray-100">
              <div className="bg-[#d7dee4] p-3 rounded-full flex-shrink-0">
                <Zap className="text-[#d4b47c]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#162750]">
                  Digital Twins
                </h3>
                <p className="text-[#8798ad]">
                  Developing virtual replicas of physical assets, processes, and
                  systems that can be used for simulation, optimization, and
                  real-time monitoring of industrial operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 bg-[#162750] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in Collaborating?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            We're always looking for new partners to join our research
            initiatives in Industrial IoT and smart manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-[#d4b47c] hover:bg-[#d7dee4] hover:text-[#162750] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contact Our Research Team
            </a>
            <a
              href="#"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-[#162750] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Download Partnership Guide
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#162750] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <a href="/">
                  <img
                    src="https://alexandraawe.weebly.com/uploads/1/0/1/0/101020644/published/logo.jpeg?1515974294"
                    alt="Christ University Logo"
                    className="w-14 h-14 object-contain bg-white rounded-full"
                  />
                </a>
                <h2 className="text-xl font-bold">CHRIST UNIVERSITY</h2>
              </div>
              <p className="text-[#d7dee4]">
                Pioneering research in Industrial IoT and smart technologies for
                a better tomorrow.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-white hover:text-[#d4b47c]">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-[#d4b47c]">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-[#d4b47c]">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-[#d4b47c]">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-[#d4b47c] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-[#d7dee4] hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d7dee4] hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d7dee4] hover:text-white">
                    Faculty
                  </a>
                </li>
                <li>
                  <a
                    href="/collaboration"
                    className="text-[#d7dee4] hover:text-white"
                  >
                    Collaboration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#d7dee4] hover:text-white">
                    Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-semibold text-[#d4b47c] mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="text-[#d4b47c] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[#d7dee4]">
                    CHRIST (Deemed to be University)
                    <br />
                    Kengeri Campus, Bangalore
                    <br />
                    Karnataka - 560074
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#d4b47c] flex-shrink-0" size={20} />
                  <span className="text-[#d7dee4]">+91 80 4012 9100</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-[#d4b47c] flex-shrink-0" size={20} />
                  <span className="text-[#d7dee4]">
                    research@christuniversity.in
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#8798ad] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#d7dee4]">
              © 2025 CHRIST (Deemed to be University). All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-[#d7dee4] hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#d7dee4] hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="text-sm text-[#d7dee4] hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
