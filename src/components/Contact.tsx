import { useState, useEffect } from 'react';
import { CONTACT, getWhatsAppUrl, getEmailMailto, generateWhatsAppBrief } from '../config/contact';
import { MessageSquare, Instagram, Mail, Send, CheckCircle2, ArrowRight, AlertCircle, Copy, Check } from 'lucide-react';

interface ContactProps {
  initialServiceNeed?: string;
}

export default function Contact({ initialServiceNeed = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "Restaurant / Café",
    projectRequirement: initialServiceNeed ? `Looking for ${initialServiceNeed} video production.` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Update requirement if user picks a service from the cards
  useEffect(() => {
    if (initialServiceNeed) {
      setFormData((prev) => ({
        ...prev,
        projectRequirement: `Looking for ${initialServiceNeed} video production.`,
      }));
    }
  }, [initialServiceNeed]);

  const businessTypes = [
    "Restaurant / Café",
    "Fitness & Gym",
    "Real Estate & Property",
    "Fashion & Boutique",
    "Automotive & Dealership",
    "App / SaaS / Startup",
    "E-Commerce & Retail",
    "Other Commercial Business"
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Your name is required.";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required.";
    if (!formData.projectRequirement.trim()) errs.projectRequirement = "Please specify your project requirement.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const formattedSummary = generateWhatsAppBrief({
    name: formData.name,
    business: formData.businessName,
    businessType: formData.businessType,
    requirement: formData.projectRequirement,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Automatically open WhatsApp with pre-filled project brief
      const waUrl = getWhatsAppUrl(formattedSummary);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const copySummary = () => {
    navigator.clipboard.writeText(formattedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080808] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E10600]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E10600] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
            Start a Project
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
            LET'S WORK TOGETHER
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Tell me about your business and the advertisement you want to build. Reach out directly or send a project brief below.
          </p>
        </div>

        {/* Prominent Direct Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
          {/* WhatsApp */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#25D366]/50 hover:bg-[#141414] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Fastest Reply</span>
                <span className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Instagram */}
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-[#E1306C]/50 hover:bg-[#141414] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] group-hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Direct Message</span>
                <span className="text-sm font-bold text-white group-hover:text-[#E1306C] transition-colors">Instagram</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Email */}
          <a
            href={getEmailMailto()}
            className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 hover:border-white/30 hover:bg-[#141414] transition-all duration-300 flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">Formal Inquiries</span>
                <span className="text-sm font-bold text-white transition-colors">Email Me</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-[#0F0F0F] border border-white/10 p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Submission Success & Direct WhatsApp / Email Action */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-white">
                  Project Brief Ready!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Your project brief has been compiled. WhatsApp has been opened automatically with your formatted message:
                </p>
              </div>

              {/* Formatted Message Preview */}
              <div className="text-left bg-black/60 border border-white/10 rounded-xl p-4 max-w-lg mx-auto font-mono text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed">
                {formattedSummary}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                <a
                  href={getWhatsAppUrl(formattedSummary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp</span>
                </a>

                <a
                  href={getEmailMailto(`Project Request: ${formData.businessName} (${formData.businessType})`, formattedSummary)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>
              </div>

              {/* Copy Brief Option */}
              <div className="pt-4 border-t border-white/10 max-w-md mx-auto flex items-center justify-between text-xs text-neutral-400">
                <span>Want to copy the text?</span>
                <button
                  onClick={copySummary}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy Brief"}</span>
                </button>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-neutral-500 hover:text-neutral-300 underline pt-2 cursor-pointer"
              >
                &larr; Edit Details
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field 1: Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Name <span className="text-[#E10600]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#E10600] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                  {errors.name && <p className="text-xs text-[#E10600] mt-1">{errors.name}</p>}
                </div>

                {/* Field 2: Business Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                    Business Name <span className="text-[#E10600]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Luna Café or Brand Name"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#E10600] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                  />
                  {errors.businessName && <p className="text-xs text-[#E10600] mt-1">{errors.businessName}</p>}
                </div>
              </div>

              {/* Field 3: Business Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Business Type <span className="text-[#E10600]">*</span>
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#E10600] text-sm text-white focus:outline-none transition-colors"
                >
                  {businessTypes.map((t) => (
                    <option key={t} value={t} className="bg-neutral-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 4: Project Requirement */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Project Requirement <span className="text-[#E10600]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.projectRequirement}
                  onChange={(e) => setFormData({ ...formData, projectRequirement: e.target.value })}
                  placeholder="Describe your product, target audience, style preferences, or goals..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 focus:border-[#E10600] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                {errors.projectRequirement && <p className="text-xs text-[#E10600] mt-1">{errors.projectRequirement}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#E10600] hover:bg-[#c20500] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_4px_24px_rgba(225,6,0,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Start Discussion via WhatsApp</span>
                </button>
              </div>

              {/* Privacy Notice */}
              <div className="pt-2 flex items-start gap-2 text-[11px] text-neutral-500 font-mono">
                <AlertCircle className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <span>
                  No data is stored on a server. Submitting opens a direct WhatsApp chat with Sai Dinesh.
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
