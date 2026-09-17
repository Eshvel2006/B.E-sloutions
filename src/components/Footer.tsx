import { COMPANY_CONTACT, LOGO_ASSET } from '../data/content';
import { Mail, Phone, ArrowUp, Cpu, Globe, Palette } from 'lucide-react';

interface FooterProps {
  onOpenAdCopyModal?: () => void;
}

export default function Footer({ onOpenAdCopyModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Company branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/30 bg-slate-900 flex items-center justify-center p-0.5">
                <img
                  src={LOGO_ASSET}
                  alt="B.E Solutions & Technologies Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                B.E Solutions &amp; Technologies
              </span>
            </div>
            
            <p className="text-sm font-medium text-slate-300">
              {COMPANY_CONTACT.tagline}
            </p>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Integrated engineering and digital growth agency specializing in bespoke embedded hardware, smart robotics, responsive web architectures, and high-impact brand campaigns.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Hardware Innovation &bull; Digital Growth</span>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Capabilities
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#iot-robotics"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                  <span>IoT &amp; Robotics Solutions</span>
                </a>
              </li>
              <li>
                <a
                  href="#web-uiux"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  <span>Digital Web &amp; UI/UX</span>
                </a>
              </li>
              <li>
                <a
                  href="#design-ads"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-slate-400"
                >
                  <Palette className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Branding &amp; Marketing Studio</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Get In Touch
            </h4>
            <div className="space-y-2 text-slate-300">
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono">{COMPANY_CONTACT.email}</span>
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono">{COMPANY_CONTACT.displayPhone}</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Serving academic institutions, tech enterprises, and startups worldwide.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div>
            © {new Date().getFullYear()} B.E Solutions &amp; Technologies. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#hero-section" className="hover:text-slate-400">Back to top</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
