import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">WS</span>
              </div>
              <span className="font-bold text-2xl text-white">Weblio Solutions</span>
            </div>
            <p className="mb-6 text-sm text-gray-400">
              Professional web development services tailored to your business needs. We create modern, responsive websites with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-indigo-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-indigo-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-indigo-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-indigo-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-3">
              <li><a href="/services#web-development" className="text-gray-400 hover:text-white transition">Web Development</a></li>
              <li><a href="/services#mobile-apps" className="text-gray-400 hover:text-white transition">Mobile Applications</a></li>
              <li><a href="/services#ui-ux" className="text-gray-400 hover:text-white transition">UI/UX Design</a></li>
              <li><a href="/services#e-commerce" className="text-gray-400 hover:text-white transition">E-Commerce Solutions</a></li>
              <li><a href="/services#digital-marketing" className="text-gray-400 hover:text-white transition">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-indigo-400 shrink-0" />
                <span>Kottarakkara,Kollam,kerala,India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-indigo-400 shrink-0" />
                <span>(+91) 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-indigo-400 shrink-0" />
                <a href="mailto:info@webliosolutions.com" className="hover:text-white transition">
                  info@webliosolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center text-gray-400">
          <p>© {currentYear} Weblio Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
