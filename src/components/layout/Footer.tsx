import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, Facebook, Phone, MessageCircle, MapPin } from "lucide-react";
import logo from "../../../public/Logo - White With Text BG Removed .png";

const Logo = () => (
  <Link
    to="/"
    className="flex items-center space-x-1 text-xl font-bold tracking-tight"
  >
    <img className="w-60 h-30" src={logo} alt="Tech4Growth Logo" />
  </Link>
);

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "AI Agents & Automation", path: "/services" },
    { name: "Website Development", path: "/services" },
    { name: "Digital Marketing", path: "/services" },
    { name: "WhatsApp Bots", path: "/services" },
    { name: "Content & Design", path: "/services" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/tech.4.growth?igsh=cHZkcTJldjNoYmRy",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.instagram.com/tech.4.growth?igsh=cHZkcTJldjNoYmRy",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/contact-tech4growth/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:contact.tech4growth@gmail.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-gray-400">
              Building affordable, reliable digital solutions that help startups
              and businesses grow. Your success is our mission. Available 24/7.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:contact.tech4growth@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D00D0D]" />
                <span>contact.tech4growth@gmail.com</span>
              </a>
              <a
                href="tel:+919601981524"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D00D0D]" />
                <span>+91 96019 81524</span>
              </a>
              <a
                href="https://wa.me/919601981524"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D00D0D]" />
                <span>WhatsApp (24/7)</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#D00D0D]" />
                <span>Available across India & worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-[#D00D0D] hover:bg-[#D00D0D]/10 hover:text-[#D00D0D]"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {currentYear} Tech4Growth. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};
