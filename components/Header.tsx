"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/faculty", label: "Faculty" },
    { href: "/collaboration", label: "Collaboration" },
    { href: "/consultation", label: "Consultation" },
    { href: "/student", label: "Students" },
  ];

  return (
    <>
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-4 md:p-6">
        {/* IT Lab Logo (Left) */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/Screenshot 2025-03-17 152004.png"
              alt="IT Lab Logo"
              className="h-12 md:h-16 w-auto"
            />
          </Link>
        </div>

        {/* Navigation (Center) */}
        <nav className="hidden md:flex space-x-8 text-[#0f1e45] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors relative",
                pathname === link.href
                  ? "text-[#d3b77b] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#d3b77b]"
                  : "hover:text-[#d3b77b]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Christ University Logo (Right) */}
        <div className="flex items-center">
          <Link
            href="https://christuniversity.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-2 border-b border-gray-100",
                  pathname === link.href && "text-[#d3b77b]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
