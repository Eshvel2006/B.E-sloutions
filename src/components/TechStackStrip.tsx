import { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Server, 
  Radio, 
  Layers, 
  Globe, 
  Palette, 
  Terminal, 
  Bot, 
  BarChart3, 
  Zap
} from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: 'Hardware & IoT' | 'Web & Cloud' | 'Design & Growth';
  domain: string;
  role: string;
  icon: typeof Cpu;
}

const TECH_ITEMS: TechItem[] = [
  {
    id: 'arduino',
    name: 'Arduino',
    category: 'Hardware & IoT',
    domain: 'Embedded Systems',
    role: 'Microcontroller Prototyping & Sensor Logic',
    icon: Cpu,
  },
  {
    id: 'esp32',
    name: 'ESP32 / ARM',
    category: 'Hardware & IoT',
    domain: 'IoT & Telemetry',
    role: 'Wi-Fi/BLE Gateways & Firmware Engineering',
    icon: Radio,
  },
  {
    id: 'ros-robotics',
    name: 'ROS & Robotics',
    category: 'Hardware & IoT',
    domain: 'Kinematics & Control',
    role: 'Robotic Actuation & Motor Controller Units',
    icon: Bot,
  },
  {
    id: 'react',
    name: 'React 19',
    category: 'Web & Cloud',
    domain: 'Frontend Architecture',
    role: 'Reactive Interfaces & Dynamic Applications',
    icon: Code2,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Web & Cloud',
    domain: 'Backend & APIs',
    role: 'Event-Driven Services & Microservices',
    icon: Server,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Web & Cloud',
    domain: 'Type Safety',
    role: 'Production-Grade Enterprise Architecture',
    icon: Layers,
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Web & Cloud',
    domain: 'Web Framework',
    role: 'SSR, Edge Performance & Cloud Deployments',
    icon: Globe,
  },
  {
    id: 'python-cpp',
    name: 'C++ / Python',
    category: 'Hardware & IoT',
    domain: 'Firmware & Logic',
    role: 'Low-Latency Hardware Control & Automation',
    icon: Terminal,
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Design & Growth',
    domain: 'UI/UX Systems',
    role: 'Pixel-Perfect Wireframing & Design Tokens',
    icon: Palette,
  },
  {
    id: 'analytics-ads',
    name: 'Growth & Ads',
    category: 'Design & Growth',
    domain: 'Marketing Intelligence',
    role: 'Meta/Google Ad Targeting & Conversion Funnels',
    icon: BarChart3,
  },
];

export default function TechStackStrip() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Hardware & IoT' | 'Web & Cloud' | 'Design & Growth'>('All');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const filteredItems = selectedFilter === 'All'
    ? TECH_ITEMS
    : TECH_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section 
      id="tech-stack" 
      className="py-12 bg-slate-950/90 border-y border-slate-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Technology &amp; Engineering Stack</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Tools &amp; Frameworks We Engineer With
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Production-tested technologies powering our hardware prototypes, digital systems, and marketing campaigns.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800/90 self-start sm:self-auto">
            {(['All', 'Hardware & IoT', 'Web & Cloud', 'Design & Growth'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                id={`tech-filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                  selectedFilter === filter
                    ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grayscale Tech Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {filteredItems.map((tech) => {
            const Icon = tech.icon;
            const isHovered = activeTooltip === tech.id;

            return (
              <div
                key={tech.id}
                id={`tech-badge-${tech.id}`}
                onMouseEnter={() => setActiveTooltip(tech.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                className="group relative p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/70 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                    <Icon className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400 uppercase tracking-wider">
                    {tech.domain}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 group-hover:text-cyan-300/80 transition-colors line-clamp-1 mt-0.5">
                    {tech.role}
                  </p>
                </div>

                {/* Hover Glow Pill */}
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-400/80 transition-all duration-500" />

                {/* Tooltip on Active/Hover */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 p-2.5 bg-slate-950 border border-cyan-500/40 rounded-xl shadow-xl z-20 pointer-events-none text-left backdrop-blur-md">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-cyan-400 uppercase">
                      <Zap className="w-3 h-3" />
                      <span>{tech.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white mt-0.5">{tech.name}</div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-snug">{tech.role}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Client Trust Banner note */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 font-medium">Enterprise &amp; Academic Grade Compatibility</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>• Custom Hardware Schematics</span>
            <span>• Real-Time Cloud Synchronization</span>
            <span>• Conversion-Tested Ad Assets</span>
          </div>
        </div>

      </div>
    </section>
  );
}
