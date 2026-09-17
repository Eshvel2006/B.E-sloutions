import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackStrip from './components/TechStackStrip';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('IoT & Robotics');

  // Animated scroll progress for the top viewport bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleSelectServiceForContact = (serviceCategory: string) => {
    setSelectedServiceForContact(serviceCategory);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Top of Viewport Scroll Progress Bar */}
      <motion.div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[3px] bg-cyan-500 origin-left z-[100] shadow-[0_0_10px_rgba(6,182,212,0.85)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Header Section: B.E Solutions & Technologies */}
        <Hero onServiceSelect={handleSelectServiceForContact} />

        {/* Tech Stack & Ecosystem Trust Strip */}
        <TechStackStrip />

        {/* Core Pillars: IoT & Robotics, Web & UI/UX, Design & Ads */}
        <ServicesSection onSelectService={handleSelectServiceForContact} />

        {/* Contact / CTA Section: Ready to build your next hardware project or digital campaign? */}
        <ContactSection initialServiceCategory={selectedServiceForContact} />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
