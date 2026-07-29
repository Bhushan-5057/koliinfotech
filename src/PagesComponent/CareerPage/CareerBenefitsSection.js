import React, { Fragment } from "react";
import Link from "next/link";
import { Rocket, Users, Clock, Award } from "lucide-react";

const CAREER_BENEFITS = [
  {
    icon: Rocket,
    title: "Career Growth",
    desc: "Clear growth paths, skill development programs, and mentorship from senior engineers and leaders.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work with a supportive team that values open communication, knowledge sharing, and mutual respect.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    desc: "Flexible timings, hybrid work options, and a culture that respects your personal time and well-being.",
  },
  {
    icon: Award,
    title: "Competitive Rewards",
    desc: "Industry-competitive salaries, performance bonuses, and recognition for outstanding contributions.",
  },
];

const CareerBenefitsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 mb-3 bg-brand-500/10 px-4 py-2 rounded-full">
            Why Join Us
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Build Your Career at <span className="text-brand-500">KOLI Infotech</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Join a team of 100+ passionate technologists building software for clients across
            India, Canada, and worldwide. We offer more than a job — we offer a career with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {CAREER_BENEFITS.map((item) => {
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

        <div className="bg-brand-50 rounded-2xl border border-brand-100 p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Hiring Process</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Apply online → HR screening → Technical interview → Final discussion → Offer letter.
            We respect your time and typically complete the process within 1–2 weeks.
          </p>
          <Link href="#openings" className="px-8 py-3 rounded-full bg-brand-500 text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline shadow-md">
            View Open Positions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerBenefitsSection;
