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
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

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



  return (
    <div className="min-h-screen bg-[#d6dce6] relative overflow-hidden">
      {/* Animated background shapes */}
      <div ref={shapesRef} className="absolute inset-0 z-0 overflow-hidden">
        <div className="shape absolute top-[20%] right-[10%] w-32 h-32 bg-[#87909b] rounded-full opacity-90"></div>
        <div className="shape absolute top-[5%] right-[30%] w-32 h-32 bg-[#97989b] rounded-3xl opacity-50"></div>


        <div className="shape absolute top-[60%] left-[5%] w-40 h-20 bg-[#d3b77b] rounded-full opacity-70"></div>
        <div className="shape absolute bottom-[15%] right-[19%] w-48 h-48 bg-[#e9f0f2] rounded-3xl opacity-80"></div>
        <div className="shape absolute top-[40%] right-[20%] w-64 h-32 bg-[#d3b77b] rounded-full opacity-70"></div>
        <div className="shape absolute bottom-[30%] left-[10%] w-48 h-48 bg-[#e9f0f2] rounded-3xl opacity-80"></div>
        <div className="shape absolute top-[10%] left-[20%] w-32 h-16 bg-[#d3b77b] rounded-full opacity-70"></div>
        <div className="shape absolute bottom-[10%] right-[30%] w-24 h-24 bg-[#e9f0f2] rounded-full opacity-80"></div>
        <div className="shape absolute top-[70%] right-[5%] w-36 h-36 bg-[#d3b77b] rounded-3xl opacity-70"></div>
        <div className="shape absolute top-[30%] left-[20%] w-32 h-32 bg-[#e9f0f2] rounded-full opacity-80"></div>
      </div>

      {/* Header */}





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

            {/* <div className="flex flex-wrap gap-4">
              <Button className="bg-[#0f1e45] text-white hover:bg-[#1a2a50] rounded-full px-6">
                Explore Research
              </Button>
              <Link href="/faculty">
              <Button variant="outline" className="border-[#d3b77b] text-[#d3b77b] hover:bg-[#d3b77b] hover:text-white rounded-full px-6">
                Join Our Team
              </Button>
            </Link>
          </div>*/}
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
                <span className="font-medium">9 Researchers</span> contributing to this initiative
              </div>
            </div>
          </div>



        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Events (Links to Home Page) */}
          <Link href="/home" className="w-full md:w-82 h-32 bg-[#d3b77b] rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer">
            <div className="flex items-center space-x-3 px-6">
              <Calendar className="text-white" size={24} />
              <span className="text-white font-medium">Upcoming Events</span>
            </div>
          </Link>



          {/* Publications (Links to About Page) */}
          <Link href="/about" className="w-full md:w-82 h-32 bg-[#e9f0f2] rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 flex items-center justify-center cursor-pointer">
            <div className="flex items-center space-x-3 px-6">
              <BookOpen className="text-[#d3b77b]" size={24} />
              <span className="text-[#0f1e45] font-medium">Publications</span>
            </div>
          </Link>
        </section>


        {/* Image Card with Overlay */}
        {/* should customize */}
        {/* link to collaboration page */}


        <section className="mt-20 mb-16 flex justify-end">
          <Link href="/collaboration" className="w-full md:w-2/3 lg:w-1/2 overflow-hidden rounded-3xl shadow-2xl transform transition-all hover:scale-105 relative group block">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Students collaborating"
              className="w-full h-full object-cover cursor-pointer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e45]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-2">Collaborative Research Environment</h3>
              <p className="text-white/90 text-sm mb-4">Our state-of-the-art facilities foster innovation and teamwork among researchers and students.</p>
              <Button className="self-start bg-white text-[#0f1e45] hover:bg-white/90 rounded-full">
                Learn More
              </Button>
            </div>
          </Link>
        </section>


        {/* Tabs Section */}
        <section className="mb-16">
          <Tabs defaultValue="research" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#0f1e45]">Partners</h2>
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
                  <h3 className="text-xl font-bold text-[#0f1e45] mb-2">Innovative Lab</h3>
                  <p className="text-gray-700 mb-4">Access cutting-edge IoT equipment and resources for your research projects.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-white/50">IoT Devices</Badge>
                    <Badge variant="outline" className="bg-white/50">Sensors</Badge>
                    <Badge variant="outline" className="bg-white/50">Prototyping</Badge>
                  </div>

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

                </Card>

                <Card className="bg-[#e9f0f2] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
                  <BookOpen className="text-[#d3b77b] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#0f1e45] mb-2">Research Areas</h3>
                  <p className="text-gray-700 mb-4">Explore our focus areas including smart cities, industrial automation, and more.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-white/50">Health Management</Badge>
                    <Badge variant="outline" className="bg-white/50">Video Analytics</Badge>
                    <Badge variant="outline" className="bg-white/50">Cold chain Management</Badge>
                  </div>
                  <Link href="about" className="flex items-center text-[#d3b77b] font-medium hover:underline">
                    Discover <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Project 1: Video Analytics - IRetail */}
                <Card className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556742521-9713bf272865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt="Video Analytics - IRetail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Active</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1e45] mb-2">Video Analytics - IRetail</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Integrated Video Analytics Solution for Enhanced Retail Store Optimization and Customer Engagement.
                    </p>
                  </div>
                </Card>

                {/* Project 2: Medical Imaging (Automation) - iHealthcare */}
                <Card className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1584466980601-01c3e6c57ad1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                      alt="Medical Imaging - iHealthcare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f1e45] mb-2">Medical Imaging (Automation) - iHealthcare</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Ensuring consistently high-quality images and robust patient privacy measures has emerged as a pivotal concern.
                    </p>
                  </div>
                </Card>

              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="rounded-full border-[#d3b77b] text-[#d3b77b]"
                  onClick={() => window.location.href = "/collaboration"} // Redirects to Collaboration page
                >
                  View All Projects <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </TabsContent>



            <TabsContent value="partners" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 flex items-center justify-center h-32 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="font-bold text-xl text-[#0f1e45]">AdvanTech</div>
                    <div className="text-xs text-gray-500">Research Partner</div>
                  </div>
                </div>
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
              <span className="text-xs text-gray-500 mt-1">Analysis</span>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">4</div>
              <div className="text-sm">Research Projects</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">{/*value for research funding*/}</div>
              <div className="text-sm">Research Funding</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-[#d3b77b] mb-2">1</div>
              <div className="text-sm">Industry Partners</div>
            </div>
          </div>
        </section>


        {/* Event Details Section */}
        

        {/* Newsletter Section */}
        <section className="mt-16 bg-[#e9f0f2] rounded-full p-8 mx-auto max-w-lg shadow-m">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-lg font-bold text-[#0f1e45] mb-5">Lab Venue</h3>
              <p className="text-base text-gray-700">
                222, 2nd block, <br />
                1st floor
              </p>

              {/* <p className="text-gray-700 max-w-md">Subscribe to our newsletter to receive updates on research opportunities, events, and publications.</p> */}
            </div>
            
          </div>
        </section>
      </main>

    </div>
  );
}



