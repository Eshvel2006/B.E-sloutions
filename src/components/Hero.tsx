import { useState } from 'react';
import { COMPANY_CONTACT, LOGO_ASSET } from '../data/content';
import { ArrowDown, Mail, Phone, Check, Copy, Sparkles, Cpu, Globe, Palette } from 'lucide-react';

interface HeroProps {
  onServiceSelect?: (serviceId: string) => void;
}

export default function Hero({ onServiceSelect }: HeroProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden tech-grid-pattern border-b border-slate-800/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Core Ad Message */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Category Indicator */}
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-3">
              Hardware • Software • Digital Marketing
            </p>

            {/* Corporate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-5">
              B.E Solutions &amp; Technologies
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 tracking-tight leading-snug mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 font-semibold">
                Engineering Innovation.
              </span>{' '}
              <span className="text-slate-300">Building Digital Growth.</span>
            </p>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              From precision embedded hardware prototyping and intelligent robotics to bespoke web architectures and ROI-focused branding studios — delivering full-spectrum technical execution for modern enterprises and academic pioneers.
            </p>

            {/* Service Pillars Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-9">
              <a
                href="#iot-robotics"
                onClick={() => onServiceSelect && onServiceSelect('iot-robotics')}
                className="group p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all hover:bg-slate-900 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 group-hover:scale-105 transition-transform">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Hardware</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300">IoT &amp; Robotics</div>
                </div>
              </a>

              <a
                href="#web-uiux"
                onClick={() => onServiceSelect && onServiceSelect('web-uiux')}
                className="group p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/40 group-hover:scale-105 transition-transform">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Software</div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300">Web &amp; UI/UX</div>
                </div>
              </a>

              <a
                href="#design-ads"
                onClick={() => onServiceSelect && onServiceSelect('design-ads')}
                className="group p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all hover:bg-slate-900 flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 group-hover:scale-105 transition-transform">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Growth</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-300">Design &amp; Ads</div>
                </div>
              </a>
            </div>

            {/* CTAs & Direct Contact Quick Access */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2"
              >
                <span>Consult on Your Project</span>
                <ArrowDown className="w-4 h-4 text-slate-950 -rotate-90" />
              </a>

              <a
                href="#iot-robotics"
                id="hero-secondary-cta"
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 rounded-xl transition-all flex items-center gap-2"
              >
                <span>View All Services</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Copy Contact Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                Direct Contact:
              </span>
              
              <button
                onClick={() => handleCopy(COMPANY_CONTACT.email, 'email')}
                id="hero-copy-email-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 rounded-lg text-slate-300 transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono">{COMPANY_CONTACT.email}</span>
                {copiedKey === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </button>

              <button
                onClick={() => handleCopy(COMPANY_CONTACT.phone, 'phone')}
                id="hero-copy-phone-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 rounded-lg text-slate-300 transition-colors"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono">{COMPANY_CONTACT.displayPhone}</span>
                {copiedKey === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 ml-1" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Corporate Logo & Identity Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-500 rounded-3xl opacity-30 blur-lg" />

              {/* Main Card Frame */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 backdrop-blur-xl shadow-2xl">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Corporate Identity
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">
                    B.E Solutions &amp; Technologies
                  </span>
                </div>

                {/* The Logo Art Image Container */}
                <div className="relative mt-4 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group aspect-square flex items-center justify-center p-4">
                  <img
                    src={LOGO_ASSET}
                    alt="B.E Solutions & Technologies corporate logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Corporate Tagline & Division Badges */}
                <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <div className="text-xs font-bold text-white mb-1">
                    B.E Solutions &amp; Technologies
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineering Innovation. Building Digital Growth.
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-cyan-400 font-medium">IoT &amp; Robotics</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-blue-400 font-medium">Web &amp; UI/UX</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-emerald-400 font-medium">Branding &amp; Ads</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
