import React, { memo } from "react";
import Link from "next/link";
import industries from "@/data/industries.json";
import {
  Rocket,
  ShoppingBag,
  HeartPulse,
  UtensilsCrossed,
  GraduationCap,
  Factory,
  Building2,
  Briefcase,
} from "lucide-react";

const ICON_MAP = {
  rocket: Rocket,
  shopping: ShoppingBag,
  health: HeartPulse,
  hotel: UtensilsCrossed,
  education: GraduationCap,
  factory: Factory,
  building: Building2,
  enterprise: Briefcase,
};

const IndustriesSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12 lg:mb-16 section-fade-down">
          <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-brand-500 mb-4">
            Industries We Serve
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Solutions for <span className="text-brand-500">Every Industry</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            We&apos;ve delivered technology solutions across diverse sectors — from local businesses
            to global enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, index) => {
            const Icon = ICON_MAP[industry.icon] || Briefcase;
            return (
              <div
                key={industry.id}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-200 hover:-translate-y-1 transition-all duration-300 section-fade-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed m-0">{industry.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 section-fade-up">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors no-underline"
          >
            See how we&apos;ve helped businesses like yours
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(IndustriesSection);
