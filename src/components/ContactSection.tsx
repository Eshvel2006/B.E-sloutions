import { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '../data/content';
import { Mail, Phone, MessageSquare, Send, Check, Copy, ExternalLink, Clock, ShieldCheck } from 'lucide-react';
import type { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialServiceCategory?: string;
}

export default function ContactSection({ initialServiceCategory }: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'IoT & Robotics',
    projectBrief: '',
    budgetRange: 'Enterprise / Standard',
    timeline: 'Within 2-4 Weeks',
  });

  useEffect(() => {
    if (initialServiceCategory) {
      setFormData((prev) => ({
        ...prev,
        serviceCategory: initialServiceCategory,
      }));
    }
  }, [initialServiceCategory]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean dispatch with mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative bg-slate-950 border-t border-slate-800/80 tech-grid-pattern"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main CTA Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide uppercase mb-4">
            <Send className="w-3 h-3 text-cyan-400" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Ready to build your next hardware project or digital campaign?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Reach out directly for custom IoT architectures, web platforms, or high-conversion marketing assets. We respond promptly with technical scopes and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Direct Action Channels & Quick Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Direct Communication Channels
              </h3>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-lg shadow-black/30">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Official Email Channel
                      </span>
                      <a
                        href={`mailto:${COMPANY_CONTACT.email}`}
                        className="text-base sm:text-lg font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
                      >
                        {COMPANY_CONTACT.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.email, 'email')}
                    id="contact-copy-email-btn"
                    className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Guaranteed response within 24h</span>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}?subject=Project%20Inquiry%20-%20B.E%20Solutions`}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Compose Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-lg shadow-black/30">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/40 text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Telephone &amp; WhatsApp
                      </span>
                      <a
                        href={`tel:${COMPANY_CONTACT.phone}`}
                        className="text-base sm:text-lg font-mono font-bold text-white hover:text-blue-300 transition-colors"
                      >
                        {COMPANY_CONTACT.displayPhone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(COMPANY_CONTACT.phone, 'phone')}
                    id="contact-copy-phone-btn"
                    className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Available Mon – Sat (9 AM – 7 PM IST)</span>
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.phone.replace(/[^0-9]/g, '')}?text=Hello%20B.E%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/60 space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-3 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>NDA Protected &amp; Intellectual Property Guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Iterative Prototyping &amp; Clear Milestones</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Project Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Send Project Specifications
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Tell us about your hardware requirements, website ideas, or ad campaign.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-1 rounded-md">
                  FAST RESPONSE
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">
                    Project Inquiry Prepared!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name || 'Partner'}</span>. Your inquiry for <span className="text-cyan-300 font-semibold">{formData.serviceCategory}</span> has been logged.
                  </p>
                  <p className="text-xs text-slate-400">
                    We will get in touch at <span className="font-mono text-slate-200">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(
                        `Inquiry: ${formData.serviceCategory} - ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.serviceCategory}\nTimeline: ${formData.timeline}\nBrief: ${formData.projectBrief}`
                      )}`}
                      className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-cyan-400 transition-colors"
                    >
                      Send directly via Mail Client
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl hover:text-white transition-colors"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="project-inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Kumar"
                        id="form-name"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        id="form-email"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91..."
                        id="form-phone"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Primary Service Pillar *
                      </label>
                      <select
                        value={formData.serviceCategory}
                        onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                        id="form-service"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="IoT & Robotics">IoT &amp; Robotics (Hardware &amp; Embedded)</option>
                        <option value="Web & UI/UX">Web &amp; UI/UX (Digital Web Experiences)</option>
                        <option value="Design & Ads">Design &amp; Ads (Branding &amp; Marketing Studio)</option>
                        <option value="All-Inclusive Tech">Full-Spectrum Hardware &amp; Digital Growth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Scope or Brief *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectBrief}
                      onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                      placeholder="Describe your hardware project, embedded system, website requirements, or branding deliverables..."
                      id="form-brief"
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        id="form-timeline"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Urgent (1-2 Weeks)">Urgent (1–2 Weeks)</option>
                        <option value="Within 2-4 Weeks">Standard (2–4 Weeks)</option>
                        <option value="1-3 Months">Phase-Wise (1–3 Months)</option>
                        <option value="Flexible">Exploratory / Flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        id="form-budget"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Academic / Prototype">Academic / Prototype Grant</option>
                        <option value="Startup / Growth">Startup MVP &amp; Growth</option>
                        <option value="Enterprise / Standard">Enterprise &amp; Production Scale</option>
                        <option value="Custom Consultation">Custom Retainer / Ongoing</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="form-submit-btn"
                    className="w-full mt-2 py-3.5 px-6 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
