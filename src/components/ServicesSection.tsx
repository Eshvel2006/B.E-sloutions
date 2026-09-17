import { useState } from 'react';
import { SERVICE_PILLARS } from '../data/content';
import { CheckCircle2, ArrowRight, Layers, Cpu, Globe, Palette } from 'lucide-react';
import type { ServicePillar } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'IoT & Robotics':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Web & UI/UX':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Design & Ads':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredPillars = activeTab === 'all' 
    ? SERVICE_PILLARS 
    : SERVICE_PILLARS.filter(p => p.id === activeTab);

  return (
    <section id="services-showcase" className="py-20 md:py-28 relative bg-slate-950">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Service Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Core Capabilities &amp; Solutions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl">
              Engineered for seamless cross-disciplinary execution. Explore our hardware, software, and marketing divisions.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              id="filter-tab-all"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Sections
            </button>
            {SERVICE_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                id={`filter-tab-${pillar.id}`}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === pillar.id
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {pillar.category}
              </button>
            ))}
          </div>
        </div>

        {/* The 3 Ad Copy Pillars */}
        <div className="space-y-24">
          {filteredPillars.map((pillar, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category & Section Tag */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getCategoryIcon(pillar.category)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                        Section: {pillar.category}
                      </span>
                      <span className="text-xs text-slate-500 mx-2">•</span>
                      <span className="text-xs text-slate-400 font-medium">{pillar.badgeText}</span>
                    </div>
                  </div>

                  {/* Main Title - Matches prompt content */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight mb-4">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {pillar.subtitle}
                  </p>

                  {/* EXACT Bullets from Prompt */}
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800/90 p-5 mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Core Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base font-semibold text-slate-100">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables / Scope Breakdown */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Technical Scope &amp; Output
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="text-xs text-slate-300 bg-slate-950/80 border border-slate-800/80 px-3 py-2 rounded-lg flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onSelectService(pillar.category)}
                      id={`inquire-btn-${pillar.id}`}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center gap-2"
                    >
                      <span>Inquire for {pillar.category}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Visual Media Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative group">
                    {/* Glowing perimeter */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity" />

                    {/* Card container */}
                    <div className="relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
                      
                      {/* Image Preview */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                        <img
                          src={pillar.imageSrc}
                          alt={pillar.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                        {/* Top badge */}
                        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-[11px] font-semibold text-cyan-300">
                          {pillar.badgeText}
                        </div>

                        {/* Bottom metrics bar */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800 text-xs">
                          {pillar.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="text-center sm:text-left">
                              <span className="block text-[10px] text-slate-400 uppercase tracking-wider">
                                {h.label}
                              </span>
                              <span className="font-bold text-white font-mono text-xs">
                                {h.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
