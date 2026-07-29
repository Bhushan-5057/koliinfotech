import React from "react";
import { MessageSquare, Clock, Shield, Headphones } from "lucide-react";

const CONTACT_POINTS = [
  {
    icon: MessageSquare,
    title: "Tell Us About Your Project",
    desc: "Share your goals, timeline, and budget. Whether it's a new app, website redesign, or cloud migration — we're here to listen.",
  },
  {
    icon: Clock,
    title: "Response Within 24 Hours",
    desc: "Our team reviews every inquiry personally. You'll hear back within one business day with next steps or a call scheduling link.",
  },
  {
    icon: Shield,
    title: "NDA & Confidentiality",
    desc: "Your ideas and business data are safe with us. We're happy to sign an NDA before discussing sensitive project details.",
  },
  {
    icon: Headphones,
    title: "Free Consultation",
    desc: "No obligation, no sales pressure. Get honest technical advice and a rough estimate before you commit to anything.",
  },
];

const ContactIntroSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">
            Start a Conversation
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Let&apos;s Build Something <span className="text-brand-500">Great Together</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            KOLI Infotech has helped 150+ businesses across India, Canada, and worldwide turn
            ideas into production-ready software. Tell us what you&apos;re building — we&apos;ll
            help you get there faster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CONTACT_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed m-0">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-brand-50 rounded-2xl border border-brand-100 p-8 md:p-10">
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">
              Office Hours
            </p>
            <p className="text-slate-700 font-semibold m-0">Mon – Sat, 9:00 AM – 7:00 PM IST</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">
              Average Response
            </p>
            <p className="text-slate-700 font-semibold m-0">Within 24 business hours</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-2">
              Global Clients
            </p>
            <p className="text-slate-700 font-semibold m-0">India, Canada, USA, UK & more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntroSection;
