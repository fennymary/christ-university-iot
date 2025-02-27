import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Christ University Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="font-bold text-white text-lg hidden md:block">CHRIST UNIVERSITY</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gold-300 transition duration-300">
                Home
              </Link>
              <Link href="#about" className="text-white hover:text-gold-300 transition duration-300">
                About
              </Link>
              <Link href="#faculty" className="text-white hover:text-gold-300 transition duration-300">
                Faculty
              </Link>
              <Link href="#collaboration" className="text-white hover:text-gold-300 transition duration-300">
                Collaboration
              </Link>
              <Link href="#consultation" className="text-white hover:text-gold-300 transition duration-300">
                Consultation
              </Link>
            </nav>

            <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-6">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>

            {/* 3D Floating Elements */}
            <div className="absolute w-20 h-20 -top-4 -left-10 bg-gradient-to-br from-blue-400/30 to-blue-600/30 backdrop-blur-sm rounded-xl rotate-12 animate-float1"></div>
            <div className="absolute w-16 h-16 bottom-10 -right-4 bg-gradient-to-br from-amber-400/30 to-amber-600/30 backdrop-blur-sm rounded-xl -rotate-12 animate-float2"></div>

            <div className="backdrop-blur-sm bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Advanced Research For <span className="text-amber-400">Industrial IoT</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Pioneering innovation through cutting-edge research and industry collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* Floating UI Elements */}
            <div className="absolute w-14 h-14 top-0 left-20 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-xl rotate-12 animate-float2"></div>
            <div className="absolute w-10 h-10 bottom-10 right-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 backdrop-blur-sm rounded-xl -rotate-12 animate-float1"></div>

            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 h-10 w-2 rounded-full mr-4"></span>
                Event Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <Building2 className="text-amber-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Lab Venue</h3>
                    <p className="text-gray-300">222, 2nd Block, 1st Floor</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <MapPin className="text-amber-400 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Bangalore Kengeri Campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image & Content Block */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="backdrop-blur-sm bg-white/10 p-8 rounded-3xl shadow-xl border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-600 h-10 w-2 rounded-full mr-4"></span>
                  Collaborative Research
                </h2>

                <p className="text-gray-200 mb-6">
                  Our state-of-the-art IoT lab fosters innovation through collaborative research between students,
                  faculty, and industry partners. We focus on developing practical solutions for real-world industrial
                  challenges.
                </p>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-amber-400 rounded-full"></span>
                    Advanced sensor networks and data analytics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-amber-400 rounded-full"></span>
                    Industrial automation and smart manufacturing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-amber-400 rounded-full"></span>
                    Energy-efficient IoT deployments
                  </li>
                </ul>

                <Button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-full px-6">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-3xl"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Students collaborating"
                width={600}
                height={500}
                className="rounded-3xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 mt-12 border-t border-blue-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Christ University Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <span className="font-bold text-white text-xl">CHRIST UNIVERSITY</span>
                </div>
                <p className="text-gray-400 max-w-md">
                  Deemed to be University, fostering excellence in research and education since 1969
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-amber-400" />
                    <span>Bangalore Kengeri Campus, Mysore Road, Bangalore, Karnataka, 560074</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-amber-400" />
                    <span>+91 80 4012 9100</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-amber-400" />
                    <span>mail@christuniversity.in</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <ExternalLink className="h-5 w-5 text-amber-400" />
                    <Link
                      href="https://www.christuniversity.in"
                      target="_blank"
                      className="hover:text-amber-400 transition duration-300"
                    >
                      www.christuniversity.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-blue-800/50 text-center">
              <p className="text-gray-500">
                © {new Date().getFullYear()} CHRIST (Deemed to be University). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

