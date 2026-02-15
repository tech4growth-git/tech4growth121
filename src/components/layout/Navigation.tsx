import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../../../public/Logo - White With Text BG Removed .png";

const Logo = () => (
  <Link
    to="/"
    className="flex items-center gap-1 text-2xl font-bold tracking-wide"
  >
    <img className="w-60 h-30" src={logo} alt="Tech4Growth Logo" />
  </Link>
);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-white"
                    : "text-gray-400 hover:text-white",
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#D00D0D]" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-[#D00D0D] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#B00B0B] transition-all duration-300"
            >
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            isOpen ? "max-h-96 pb-6" : "max-h-0",
          )}
        >
          <div className="flex flex-col space-y-1 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                  location.pathname === link.path
                    ? "bg-[#D00D0D]/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white",
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#D00D0D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#B00B0B] transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
