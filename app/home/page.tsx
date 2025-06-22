"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  LightbulbIcon,
  ArrowRight,
  UserCircle,
  Play,
  Zap,
  Target,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

const labImages = [
  "/labimg71.jpg",
  "/labimg72.jpg", 
  "/labimg73.jpg",
  "/labimg74.jpg",
  "/labimg75.jpg",
  "/labimg76.jpg",
  "/labimg77.jpg",
  "/labimg78.jpg",

];
const testingImages = [
  "/labimg3.jpg",
  "/labimg4.jpg",
  "/labimg5.jpg",
  "/labimg6.jpg",
];


export default function Home() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  // Navigation function to handle page routing
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#d3b77b]/20 blur-3xl -z-10"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-[#d3b77b]/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 right-1/3 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl -z-10"></div>

      {/* Yellow Circle Accent */}
      <div className="absolute top-32 right-1/4 w-16 h-16 rounded-full bg-[#d3b77b] opacity-70 -z-10"></div>
      <div className="absolute bottom-64 left-16 w-8 h-8 rounded-full bg-[#d3b77b] opacity-60 -z-10"></div>
      <div className="absolute top-96 left-1/3 w-12 h-12 rounded-full bg-[#d3b77b] opacity-50 -z-10"></div>

      {/* Blue Circle Accent */}
      <div className="absolute top-64 left-20 w-10 h-10 rounded-full bg-blue-600 opacity-40 -z-10"></div>
      <div className="absolute bottom-32 right-20 w-14 h-14 rounded-full bg-blue-600 opacity-30 -z-10"></div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 right-10 w-40 h-1 bg-[#d3b77b]/40 rotate-45 -z-10"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-1 bg-blue-600/30 -rotate-45 -z-10"></div>

      {/* Main Content */}
      <main className="flex-grow bg-[#e2e8f0] relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <div className="relative">
              {/* Yellow accent shape behind the heading */}
              <div className="absolute -left-4 top-10 w-24 h-24 bg-[#d3b77b]/30 rounded-full blur-md -z-10"></div>
              <div className="absolute left-64 top-16 w-16 h-16 bg-blue-500/20 rounded-full blur-sm -z-10"></div>

              <h2 className="text-5xl font-bold text-[#0f172a] mb-6 relative">
                Advanced Research For Industrial IoT
                {/* Decorative element */}
                <div className="absolute -right-4 -bottom-2 w-12 h-2 bg-[#d3b77b] rounded-full"></div>
              </h2>
              <p className="text-gray-700 mb-8">
                Pioneering innovative solutions at the intersection of IoT, AI,
                and industrial applications to transform the future of smart
                manufacturing.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="bg-[#0f1e45] text-white hover:bg-[#1a2a50] rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                  onClick={() => navigateTo("/about")}
                >
                  <span className="relative z-10">Explore Research</span>
                  <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full -z-0"></div>
                </button>
                <button
                  className="border border-[#d3b77b] text-[#d3b77b] hover:bg-[#d3b77b] hover:text-white rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg"
                  onClick={() => navigateTo("/faculty")}
                >
                  Join Our Team
                </button>
              </div>

              <div className="flex items-center mt-8 mb-8 relative">
                {/* Small decorative circle */}
                <div className="absolute -left-6 top-1/2 w-3 h-3 bg-[#d3b77b] rounded-full"></div>

                <div className="flex -space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt="Researcher"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt="Researcher"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt="Researcher"
                  />
                </div>
                <p className="ml-4 text-gray-700">
                  20+ Researchers contributing to this initiative
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md mb-8 relative overflow-hidden">
                {/* Yellow corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#d3b77b]/20 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full"></div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-4">
                  Announcement Details
                </h3>

                {/* Main Content Container */}
                <div className="mt-6">
                  {/* Faculty Development Program */}
                  <div className="text-gray-700 mb-4">
                    <p className="font-semibold">Faculty Development Program</p>
                    <p>
                      Proposing for FDP with finding agencies to widen the
                      prospectives. The Faculty Development Program (FDP) on
                      "Integrating IoT into Curriculum: Hands-On Training with
                      Advantech" is designed to empower educators with the
                      knowledge and skills necessary to incorporate Internet of
                      Things (IoT) technologies into their teaching practices.
                    </p>
                  </div>
                </div>

                {/* Executive Certification Course on IoT */}
                <div className="mt-6">
                  <p className="text-gray-700 font-semibold">
                    Executive Certification Course on IoT
                  </p>
                </div>

                {/* Course Phases */}
                <div className="mt-6">
                  <p className="text-gray-700 font-semibold">
                    This course is planned in 3 phases:
                  </p>
                </div>

                {/* Phase 1 */}
                <div className="mt-6">
                  <p className="text-gray-700">
                    <strong>Phase 1:</strong> 40 Hours on basics of programming
                    required for IoT
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="mt-6">
                  <p className="text-gray-700">
                    <strong>Phase 2:</strong> 40 Hours on Sensors and Machine
                    interface
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="mt-6">
                  <p className="text-gray-700">
                    <strong>Phase 3:</strong> 40 Hours on Sensor Data Analytics
                  </p>
                </div>
              </div>

              {/* Clean Carousel with Static Text */}
              <div className="relative rounded-3xl overflow-hidden mb-8 h-[32rem] w-full">
                {/* Decorative corner shape */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#d3b77b]/40 rounded-bl-3xl z-10"></div>

                <Swiper
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  modules={[Pagination, Navigation, Autoplay]}
  className="h-full w-full"
>
  {labImages.map((src, idx) => (
  <SwiperSlide key={idx} className="relative flex justify-center items-center">
    <img
      src={src}
      className="h-full w-auto object-cover rounded-2xl"
    />
    
  </SwiperSlide>
))}

</Swiper>


                {/* Static Text Caption Below Carousel */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-3xl z-20">
                  <p className="text-white font-semibold text-center">
                    Our researchers working in the lab
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Images and Event Details */}
            <div className="flex flex-col space-y-8 relative">
              {/* Decorative elements */}
              <div className="absolute top-20 right-10 w-12 h-12 bg-[#d3b77b]/30 rounded-full blur-sm -z-10"></div>
              <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-sm -z-10"></div>

              <div className="relative">
                <img
                  src="https://hbr.org/resources/images/article_assets/2024/06/Automation-by-Broadcom-AI-WLA-Hero-Image-1200x675-1.png"
                  alt="Woman with laptop"
                  className="rounded-3xl w-full h-64 object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-[550px] h-auto flex flex-col justify-between relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-blue-500/10 rounded-br-3xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#d3b77b]/10 rounded-tl-3xl"></div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-4 text-center relative z-10">
                  Event Details
                </h3>

                {/* Inner event sections */}
                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3 cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo("/events/fdp")}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>
                  <h4 className="font-semibold text-[#0f172a]">
                    Advantech FDP (Sponsored) - May 2025{" "}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Paid participation (both internal and external)
                  </p>
                </div>

                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm mb-3 cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo("/events/wise-paas")}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>
                  <h4 className="font-semibold text-[#0f172a]">
                    Certification course on WISE-PAAS - June 2025
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Paid participation of Rs. 999 per level (both internal and
                    external)
                  </p>
                </div>

                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo("/events/trainers")}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>
                  <h4 className="font-semibold text-[#0f172a]">
                    Training on: Logistics Healthcare Video Analyitcs OT
                    Security - July 2025
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Trainers from Advantech and participants are faculty from
                    Dept. of CSE, SoET
                  </p>
                </div>
                <div
                  className="bg-gray-100 p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => navigateTo("/events/trainers")}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#d3b77b] group-hover:w-1.5 transition-all duration-300"></div>
                  <h4 className="font-semibold text-[#0f172a]">
                    Initiation of Hackathon - March 2025
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Participation (both internal and external)
                  </p>
                </div>
              </div>

              {/* IoT Testing Carousel */}

  <div className="relative rounded-3xl overflow-hidden h-[38rem] w-full">
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    modules={[Pagination, Navigation, Autoplay]}
    className="h-full w-full"
  >
    {testingImages.map((src, idx) => (
      <SwiperSlide key={idx} className="flex items-center justify-center h-full">
  <div className="flex items-center justify-center h-full w-full">
    <img
      src={src}
      className="max-h-full max-w-full object-contain rounded-2xl"
    />
  </div>
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl z-10">
    <p className="text-white font-semibold text-center">
      Advanced IoT device testing in our lab
    </p>
  </div>
</SwiperSlide>
    ))}
  </Swiper>
</div>



 


            </div>
          </div>
        </div>
      </main>

     <style jsx global>{`
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
  }

  .swiper-pagination-bullet-active {
    background: #d3b77b !important;
    transform: scale(1.2) !important;
  }
`}</style>

    </div>
  );
}