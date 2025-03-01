'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  ChevronRight, 
  Menu, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen, 
  Lightbulb,
  Search,
  Bell,
  ChevronDown,
  Clock,
  Download,
  ExternalLink,
  Share2,
  Star,
  Bookmark
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { Progress } from '@/components/progress';
import { Badge } from '@/components/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/dropdown-menu';

export default function Home() {
  const shapesRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('research');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Animation for shapes
    const shapes = shapesRef.current?.querySelectorAll('.shape');
    if (shapes) {
      shapes.forEach((shape, index) => {
        const delay = index * 0.2;
        const htmlShape = shape as HTMLElement;
        htmlShape.style.animation = `float 6s ease-in-out ${delay}s infinite`;
      });
    }

    // Simulate progress loading
    const timer = setTimeout(() => {
      setProgress(66);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "IoT Innovation Summit",
      date: "May 15, 2025",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "AI Research Symposium",
      date: "June 3, 2025",
      location: "Block B Conference Hall",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Industry Connect Workshop",
      date: "June 20, 2025",
      location: "Innovation Lab",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const researchTeams = [
    {
      id: 1,
      name: "Smart City Solutions",
      members: 8,
      projects: 4,
      lead: "Dr. Anita Sharma",
      avatar: "AS"
    },
    {
      id: 2,
      name: "Industrial Automation",
      members: 6,
      projects: 3,
      lead: "Dr. Rajesh Kumar",
      avatar: "RK"
    },
    {
      id: 3,
      name: "IoT Security",
      members: 5,
      projects: 2,
      lead: "Dr. Priya Menon",
      avatar: "PM"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Advances in Industrial IoT Security Frameworks",
      authors: "Kumar, R., Sharma, A., et al.",
      journal: "Journal of IoT Research",
      year: 2024,
      citations: 28
    },
    {
      id: 2,
      title: "Smart City Implementation: A Case Study of Bangalore",
      authors: "Menon, P., Sharma, A., et al.",
      journal: "Urban Technology Review",
      year: 2024,
      citations: 15
    },
    {
      id: 3,
      title: "Machine Learning Approaches for Industrial Automation",
      authors: "Kumar, R., Menon, P., et al.",
      journal: "AI in Manufacturing",
      year: 2023,
      citations: 42
    }
  ];

  return (
    <div className="min-h-screen bg-[#d6dce6] relative overflow-hidden">
      {/* Animated background shapes */}
      <div ref={shapesRef} className="absolute inset-0 z-0 overflow-hidden">
        <div className="shape absolute top-[20%] right-[10%] w-32 h-32 bg-[#87909b] rounded-full opacity-80"></div>
        <div className="shape absolute top-[60%] left-[5%] w-40 h-20 bg-[#d3b77b] rounded-full opacity-70"></div>
        <div className="shape absolute bottom-[15%] right-[15%] w-48 h-48 bg-[#e9f0f2] rounded-3xl opacity-80"></div>
        <div className="shape absolute top-[40%] right-[20%] w-64 h-32 bg-[#d3b77b] rounded-full opacity-70"></div>
        <div className="shape absolute bottom-[30%] left-[10%] w-48 h-48 bg-[#e9f0f2] rounded-3xl opacity-80"></div>
        <div className="shape absolute top-[10%] left-[20%] w-32 h-16 bg-[#d3b77b] rounded-full opacity-70"></div>
        <div className="shape absolute bottom-[10%] right-[30%] w-24 h-24 bg-[#e9f0f2] rounded-full opacity-80"></div>
        <div className="shape absolute top-[70%] right-[5%] w-36 h-36 bg-[#d3b77b] rounded-3xl opacity-70"></div>
        <div className="shape absolute top-[30%] left-[30%] w-20 h-20 bg-[#e9f0f2] rounded-full opacity-80"></div>
      </div>

{/* Header */}
<header className="relative z-10 flex justify-between items-center p-4 md:p-6">
  <div className="flex items-center">
    <div className="h-12 md:h-16 w-12 md:w-16 bg-[#0f1e45] rounded-full flex items-center justify-center text-white font-bold text-xl">
      CU
    </div>
    <div className="ml-2 text-xs md:text-sm text-[#0f1e45]">
      <div className="font-bold text-lg md:text-xl">CHRIST UNIVERSITY</div>
      
    </div>
  </div>
  
  <nav className="hidden md:flex space-x-8 text-[#0f1e45] font-medium">
    <Link href="#" className="hover:text-[#d3b77b] transition-colors">Home</Link>
    <Link href="#" className="hover:text-[#d3b77b] transition-colors">About</Link>
    <Link href="#" className="hover:text-[#d3b77b] transition-colors">Faculty</Link>
    <Link href="#" className="hover:text-[#d3b77b] transition-colors">Collaboration</Link>
    <Link href="#" className="hover:text-[#d3b77b] transition-colors">Consultation</Link>
  </nav>

  <Button 
    variant="ghost" 
    size="icon" 
    className="md:hidden text-[#0f1e45]"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <Menu size={24} />
  </Button>
</header>


{/*done*/}
{/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden fixed inset-0 bg-white z-50 p-6 flex flex-col">
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <div className="h-12 w-12 bg-[#0f1e45] rounded-full flex items-center justify-center text-white font-bold text-xl">
          CU
        </div>
        <div className="ml-2 text-xs text-[#0f1e45]">
          <div className="font-bold text-lg">CHRIST UNIVERSITY</div>
         
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-[#0f1e45]"
        onClick={() => setIsMenuOpen(false)}
      >
        <ChevronRight size={24} />
      </Button>
    </div>
    
    <div className="space-y-6 text-lg font-medium text-[#0f1e45]">
      <Link href="#" className="block py-2 border-b border-gray-100">Home</Link>
      <Link href="#" className="block py-2 border-b border-gray-100">About</Link>
      <Link href="#" className="block py-2 border-b border-gray-100">Faculty</Link>
      <Link href="#" className="block py-2 border-b border-gray-100">Collaboration</Link>
      <Link href="#" className="block py-2 border-b border-gray-100">Consultation</Link>
    </div>
  </div>
)}

{/* done*/}


      {/* Main Content */}
      <main className="relative z-10 px-6 md:px-12 pt-8 pb-16">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              {/*<Badge className="bg-[#d3b77b] text-white hover:bg-[#c4a86c]">New</Badge>
              <span className="text-sm text-[#0f1e45]">Research Initiative 2025</span>*/}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f1e45] mb-4 leading-tight drop-shadow-md">
              Advanced<br />Research For Industrial IoT
            </h1>
            
            <p className="text-gray-700 mb-6 max-w-lg">
              Pioneering innovative solutions at the intersection of IoT, AI, and industrial applications to transform the future of smart manufacturing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0f1e45] text-white hover:bg-[#1a2a50] rounded-full px-6">
                Explore Research
              </Button>
              <Button variant="outline" className="border-[#d3b77b] text-[#d3b77b] hover:bg-[#d3b77b] hover:text-white rounded-full px-6">
                Join Our Team
              </Button>
            </div>
            {/* need conformation */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-medium">20+ Researchers</span> contributing to this initiative
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-96 h-64 md:h-80 bg-[#e9f0f2] rounded-3xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/5 bg-[#f5f9fa] rounded-3xl relative flex flex-col items-center justify-center p-4">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-12 h-12 rounded-full bg-[#d3b77b] mb-4 flex items-center justify-center">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div className="text-center">
                  <h3 className="text-[#0f1e45] font-medium mb-1">IoT Research Hub</h3>
                  <p className="text-xs text-gray-500">Connecting devices, transforming industries</p>
                </div>
                <div className="mt-4 w-full">
                  <div className="text-xs text-gray-500 mb-1 flex justify-between">
                    <span>Research Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-1.5" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <Button size="sm" variant="ghost" className="bg-white/80 rounded-full h-8 w-8 p-0">
                <ArrowRight size={16} className="text-[#0f1e45]" />
              </Button>
            </div>
          </div>
          
        </section>

        {/* Additional Card Row */}
        <section className="mb-16 flex flex-wrap gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            {/* <Link href="/home" className="w-full md:w-64 h-32 bg-[#e9f0f2] rounded-full shadow-lg overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer"> */}
              <div className="w-full md:w-64 h-32 bg-[#e9f0f2] rounded-full shadow-lg overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer">
                <div className="flex items-center space-x-3 px-6">
                  <Calendar className="text-[#d3b77b]" size={24} />
                  <span className="text-[#0f1e45] font-medium">Upcoming Events</span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-0" align="start">
              <div className="p-4 border-b">
                <h3 className="font-medium">Upcoming Events</h3>
              </div>
              {upcomingEvents.map(event => (
                <DropdownMenuItem key={event.id} className="p-0">
                  <div className="flex items-start p-3 w-full hover:bg-gray-50">
                    <div className="w-16 h-16 rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Calendar size={12} className="mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <MapPin size={12} className="mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
              <div className="p-2 border-t">
                <Button variant="ghost" size="sm" className="w-full justify-start text-[#d3b77b]">
                  View all events <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            {/* <Link href="/collaboration" className="w-full md:w-72 h-32 bg-[#d3b77b] rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer"> */}
              <div className="w-full md:w-72 h-32 bg-[#d3b77b] rounded-3xl shadow-lg overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer">
                <div className="flex items-center space-x-3 px-6">
                  <Users className="text-white" size={24} />
                  <span className="text-white font-medium">Research Teams</span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-0" align="start">
              <div className="p-4 border-b">
                <h3 className="font-medium">Research Teams</h3>
              </div>
              {researchTeams.map(team => (
                <DropdownMenuItem key={team.id} className="p-0">
                  <div className="flex items-center p-3 w-full hover:bg-gray-50">
                    <Avatar className="mr-3">
                      <AvatarFallback className="bg-[#0f1e45] text-white">{team.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{team.name}</h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Users size={12} className="mr-1" />
                        <span>{team.members} members</span>
                        <span className="mx-2">•</span>
                        <span>{team.projects} projects</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Lead: {team.lead}
                      </div>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
              <div className="p-2 border-t">
                <Button variant="ghost" size="sm" className="w-full justify-start text-[#d3b77b]">
                  View all teams <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            {/* <Link href="/about" className="w-full md:w-64 h-32 bg-[#e9f0f2] rounded-full shadow-lg overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer"> */}
              <div className="w-full md:w-64 h-32 bg-[#e9f0f2] rounded-full shadow-lg overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer">
                <div className="flex items-center space-x-3 px-6">
                  <BookOpen className="text-[#d3b77b]" size={24} />
                  <span className="text-[#0f1e45] font-medium">Publications</span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 p-0" align="start">
              <div className="p-4 border-b">
                <h3 className="font-medium">Recent Publications</h3>
              </div>
              {publications.map(pub => (
                <DropdownMenuItem key={pub.id} className="p-0">
                  <div className="p-3 w-full hover:bg-gray-50">
                    <h4 className="font-medium text-sm">{pub.title}</h4>
                    <p className="text-xs text-gray-700 mt-1">{pub.authors}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                      <span>{pub.journal}, {pub.year}</span>
                      <div className="flex items-center">
                        <BookOpen size={12} className="mr-1" />
                        <span>{pub.citations} citations</span>
                      </div>
                    </div>
                    <div className="flex mt-2 space-x-2">
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                        <Download size={12} className="mr-1" /> PDF
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                        <ExternalLink size={12} className="mr-1" /> DOI
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                        <Share2 size={12} className="mr-1" /> Share
                      </Button>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
              <div className="p-2 border-t">
                <Button variant="ghost" size="sm" className="w-full justify-start text-[#d3b77b]">
                  View all publications <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>

        {/* Image Card with Overlay */}
        {/* should customize */}
        {/* link to collaboration page */}
        <section className="mb-16 flex justify-end">
          <div className="w-full md:w-2/3 lg:w-1/2 overflow-hidden rounded-3xl shadow-lg transform transition-all hover:scale-105 relative group">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Students collaborating" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e45]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              {/* <Badge className="self-start mb-2 bg-[#d3b77b] text-white">Featured</Badge> */}
              <h3 className="text-white text-xl font-bold mb-2">Collaborative Research Environment</h3>
              <p className="text-white/90 text-sm mb-4">Our state-of-the-art facilities foster innovation and teamwork among researchers and students.</p>
              <Button className="self-start bg-white text-[#0f1e45] hover:bg-white/90 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-16">
          <Tabs defaultValue="research" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#0f1e45]">Research Areas</h2>
              <TabsList className="bg-[#e9f0f2]">
                <TabsTrigger value="research" className={activeTab === 'research' ? 'bg-[#d3b77b] text-white' : ''}>
                  Research
                </TabsTrigger>
                <TabsTrigger value="projects" className={activeTab === 'projects' ? 'bg-[#d3b77b] text-white' : ''}>
                  Projects
                </TabsTrigger>
                <TabsTrigger value="partners" className={activeTab === 'partners' ? 'bg-[#d3b77b] text-white' : ''}>
                  Partners
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="research" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#e9f0f2] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
                  <Lightbulb className="text-[#d3b77b] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#0f1e45] mb-2">Innovation Lab</h3>
                  <p className="text-gray-700 mb-4">Access cutting-edge IoT equipment and resources for your research projects.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-white/50">IoT Devices</Badge>
                    <Badge variant="outline" className="bg-white/50">Sensors</Badge>
                    <Badge variant="outline" className="bg-white/50">Prototyping</Badge>
                  </div>
                  <Link href="about" className="flex items-center text-[#d3b77b] font-medium hover:underline">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
                
                <Card className="bg-[#d3b77b] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
                  <Users className="text-white mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                  <p className="text-white/90 mb-4">Partner with industry leaders and academic institutions on IoT initiatives.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30">Industry</Badge>
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30">Academia</Badge>
                    <Badge variant="outline" className="bg-white/20 text-white border-white/30">Startups</Badge>
                  </div>
                  <Link href="collaboration" className="flex items-center text-white font-medium hover:underline">
                    Join us <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
                
                <Card className="bg-[#e9f0f2] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
                  <BookOpen className="text-[#d3b77b] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#0f1e45] mb-2">Research Areas</h3>
                  <p className="text-gray-700 mb-4">Explore our focus areas including smart cities, industrial automation, and more.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-white/50">Smart Cities</Badge>
                    <Badge variant="outline" className="bg-white/50">Automation</Badge>
                    <Badge variant="outline" className="bg-white/50">Security</Badge>
                  </div>
                  <Link href="about" className="flex items-center text-[#d3b77b] font-medium hover:underline">
                    Discover <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                      alt="Smart City Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Active</Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Star size={16} className="text-gray-400" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark size={16} className="text-gray-400" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1e45] mb-2">Smart City Traffic Management</h3>
                    <p className="text-gray-600 text-sm mb-4">Developing IoT-based traffic management solutions for urban areas to reduce congestion and improve safety.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarFallback className="text-xs">AS</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarFallback className="text-xs">RK</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        <span>Updated 2 days ago</span>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563770660941-10a63607739e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                      alt="Industrial IoT Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Star size={16} className="text-yellow-400" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark size={16} className="text-[#d3b77b]" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1e45] mb-2">Industrial Automation Framework</h3>
                    <p className="text-gray-600 text-sm mb-4">A comprehensive framework for implementing IoT solutions in manufacturing environments.</p>
                    <div className="flex justify-between items-center">
                      <div className="flex -space-x-2">
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarFallback className="text-xs">PM</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-2 border-white h-8 w-8">
                          <AvatarFallback className="text-xs">RK</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        <span>Completed on May 10, 2024</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="rounded-full border-[#d3b77b] text-[#d3b77b]">
                  View All Projects <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="partners" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#0f1e45]">IBM</div>
                    <div className="text-xs text-gray-500">Research Partner</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#0f1e45]">Microsoft</div>
                    <div className="text-xs text-gray-500">Technology Partner</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#0f1e45]">Siemens</div>
                    <div className="text-xs text-gray-500">Industry Partner</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#0f1e45]">MIT</div>
                    <div className="text-xs text-gray-500">Academic Partner</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="outline" className="rounded-full border-[#d3b77b] text-[#d3b77b]">
                  Become a Partner <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Rounded Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#0f1e45] mb-6">Technology Focus</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="w-32 h-32 bg-[#e9f0f2] rounded-full shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-110 cursor-pointer">
              <span className="text-[#0f1e45] font-medium mb-1">IoT</span>
              <div className="w-12 h-1 bg-[#d3b77b] rounded-full"></div>
              <span className="text-xs text-gray-500 mt-1">Devices & Networks</span>
            </div>
            <div className="w-32 h-32 bg-[#d3b77b] rounded-full shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-110 cursor-pointer">
              <span className="text-white font-medium mb-1">AI</span>
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <span className="text-xs text-white/80 mt-1">Machine Intelligence</span>
            </div>
            <div className="w-32 h-32 bg-[#e9f0f2] rounded-full shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-110 cursor-pointer">
              <span className="text-[#0f1e45] font-medium mb-1">ML</span>
              <div className="w-12 h-1 bg-[#d3b77b] rounded-full"></div>
              <span className="text-xs text-gray-500 mt-1">Data Analysis</span>
            </div>
            <div className="w-32 h-32 bg-[#d3b77b] rounded-full shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-110 cursor-pointer">
              <span className="text-white font-medium mb-1">Cloud</span>
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <span className="text-xs text-white/80 mt-1">Infrastructure</span>
            </div>
            <div className="w-32 h-32 bg-[#e9f0f2] rounded-full shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-110 cursor-pointer">
              <span className="text-[#0f1e45] font-medium mb-1">Edge</span>
              <div className="w-12 h-1 bg-[#d3b77b] rounded-full"></div>
              <span className="text-xs text-gray-500 mt-1">Computing</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-[#0f1e45] rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">25+</div>
              <div className="text-sm">Research Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">50+</div>
              <div className="text-sm">Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">12</div>
              <div className="text-sm">Industry Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">₹15Cr</div>
              <div className="text-sm">Research Funding</div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f1e45] mb-8">Event Details</h2>
          
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-medium text-[#0f1e45] mb-2">Lab Venue</h3>
              <p className="text-gray-700">
                222, 2nd block, 1st<br />
                floor
              </p>
              {/* <Button variant="outline" size="sm" className="mt-4 rounded-full border-[#d3b77b] text-[#d3b77b]"> 
                <MapPin size={14} className="mr-1" /> Get Directions
              </Button>*/}
            </div>
            
            <div className="mb-6 md:mb-0">
              <Link href="http://www.christuniversity.in" className="text-[#0f1e45] hover:text-[#d3b77b] transition-colors block mb-2">
                www.christuniversity.in
              </Link>
              <div className="flex space-x-3 mt-4">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-[#e9f0f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f1e45]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-[#e9f0f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f1e45]"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-[#e9f0f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f1e45]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-[#0f1e45] mb-2">
                CHRIST<br />
                (Deemed to be University)
              </h3>
              <p className="text-gray-700">
                Kengeri Banglore Campus<br />
                Kanmanike, Off Kanakapura Road,<br />
                Bangalore, Karnataka - 560074
              </p>
              <div className="flex items-center mt-4">
                <Button size="sm" className="rounded-full bg-[#d3b77b] text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-16 bg-[#e9f0f2] rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-xl font-bold text-[#0f1e45] mb-2">Stay Updated</h3>
              <p className="text-gray-700 max-w-md">Subscribe to our newsletter to receive updates on research opportunities, events, and publications.</p>
            </div>
            {/*<div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d3b77b]"
              />
              <Button className="bg-[#d3b77b] text-white rounded-full hover:bg-[#c4a86c]">
                Subscribe
              </Button>
            </div>*/}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0f1e45] text-white py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#0f1e45] font-bold text-lg mr-2">
                CU
              </div>
              <div className="text-xs">
                <div className="font-bold text-base">CHRIST UNIVERSITY</div>
                <div className="uppercase tracking-wider text-xs">Institute of Management</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Pioneering research in Industrial IoT and smart technologies for a better tomorrow.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Button>
            </div>
          </div>
          
          
          <div>
            <h4 className="font-medium mb-4 text-[#d3b77b]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="home" className="hover:text-[#d3b77b] transition-colors">Home</Link></li>
              <li><Link href="about" className="hover:text-[#d3b77b] transition-colors">About Us</Link></li>
              <li><Link href="faculty" className="hover:text-[#d3b77b] transition-colors">Faculty</Link></li>
              <li><Link href="collaboration" className="hover:text-[#d3b77b] transition-colors">Collaboration</Link></li>
              <li><Link href="consulation" className="hover:text-[#d3b77b] transition-colors">Consultation</Link></li>
              {/* <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">Contact</Link></li> */}
            </ul>
          </div>
          
          {/*<div>
            <h4 className="font-medium mb-4 text-[#d3b77b]">Research Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">Industrial IoT</Link></li>
              <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">Smart Cities</Link></li>
              <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">Cloud Computing</Link></li>
              <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">Edge Computing</Link></li>
              <li><Link href="#" className="hover:text-[#d3b77b] transition-colors">IoT Security</Link></li>
            </ul>
          </div>*/}
          <div className="flex justify-evenly"></div>
          <div>
            <h4 className="font-medium mb-4 text-[#d3b77b]">Contact Us</h4>
            <address className="not-italic text-sm space-y-2">
              <p className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  CHRIST (Deemed to be University)<br />
                  Kengeri Campus, Bangalore<br />
                  Karnataka - 560074
                </span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91 80 4012 9100</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>research@christuniversity.in</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 CHRIST (Deemed to be University). All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}