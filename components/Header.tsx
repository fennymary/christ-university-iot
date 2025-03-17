"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust the import path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4 md:p-6">
        {/* IT Lab Logo (Left) */}
        <div className="flex items-center">
          <img
            src="/Screenshot 2025-03-17 152004.png"
            alt="IT Lab Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Navigation (Center) */}
        <nav className="hidden md:flex space-x-8 text-[#0f1e45] font-medium">
          <Link href="/home" className="hover:text-[#d3b77b] transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#d3b77b] transition-colors"
          >
            About
          </Link>
          <Link
            href="/faculty"
            className="hover:text-[#d3b77b] transition-colors"
          >
            Faculty
          </Link>
          <Link
            href="/collaboration"
            className="hover:text-[#d3b77b] transition-colors"
          >
            Collaboration
          </Link>
          <Link
            href="/consultation"
            className="hover:text-[#d3b77b] transition-colors"
          >
            Consultation
          </Link>
          <Link
            href="/student"
            className="hover:text-[#d3b77b] transition-colors"
          >
            Students
          </Link>
        </nav>

        {/* Christ University Logo (Right) */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://christuniversity.in/images/logo.jpg"
              alt="Christ University Logo"
              className="h-12 md:h-16 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#0f1e45]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </Button>
      </header>

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
            <Link href="/home" className="block py-2 border-b border-gray-100">
              Home
            </Link>
            <Link href="/about" className="block py-2 border-b border-gray-100">
              About
            </Link>
            <Link
              href="/faculty"
              className="block py-2 border-b border-gray-100"
            >
              Faculty
            </Link>
            <Link
              href="/collaboration"
              className="block py-2 border-b border-gray-100"
            >
              Collaboration
            </Link>
            <Link
              href="/consultation"
              className="block py-2 border-b border-gray-100"
            >
              Consultation
            </Link>
            <Link
              href="/student"
              className="block py-2 border-b border-gray-100"
            >
              Students
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
