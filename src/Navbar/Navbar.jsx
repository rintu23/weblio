"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logow.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navlinks = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Centered */}
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="Weblio Solutions Logo" className="h-15 w-15 object-contain" />
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Weblio Solutions
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navlinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-white hover:text-white transition duration-300 group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 group-hover:scale-105"></span>
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
            <a
              href="/contact"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-md text-sm font-semibold hover:brightness-110 transition duration-300 shadow-md"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none hover:text-indigo-400 transition"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-700 shadow-lg">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {navlinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 transition duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-3 px-4 py-2 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-md text-sm font-semibold hover:brightness-110 transition duration-300"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
