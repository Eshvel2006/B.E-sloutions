import { useState, useEffect } from 'react';
import { COMPANY_CONTACT, LOGO_ASSET } from '../data/content';
import { Phone, Mail, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAdCopyModal?: () => void;
}

export default function Navbar({ onOpenAdCopyModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'IoT & Robotics', href: '#iot-robotics' },
    { label: 'Web & UI/UX', href: '#web-uiux' },
    { label: 'Design & Ads', href: '#design-ads' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Corporate Brand */}
          <a
            href="#"
            id="brand-home-link"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 flex items-center justify-center p-0.5 group-hover:border-cyan-400/70 transition-colors shadow-sm shadow-cyan-950">
              <img
                src={LOGO_ASSET}
                alt="B.E Solutions & Technologies Logo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                B.E Solutions & Technologies
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block tracking-wider uppercase">
                Engineering & Digital Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Quick Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              id="header-phone-cta"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_CONTACT.displayPhone}</span>
            </a>
            <a
              href="#contact"
              id="header-cta-button"
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs tracking-wide uppercase rounded-lg shadow-sm shadow-cyan-500/30 transition-all hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-2 bg-slate-900/95 border border-slate-800 rounded-xl backdrop-blur-xl shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-2 px-4 py-2 text-xs text-slate-300 bg-slate-800/50 rounded-lg"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate">{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-xs text-slate-300 bg-slate-800/50 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{COMPANY_CONTACT.displayPhone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg"
              >
                Contact Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
