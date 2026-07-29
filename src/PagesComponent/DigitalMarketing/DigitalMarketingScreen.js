import React, { Fragment } from "react";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import {
  Search,
  TrendingUp,
  Megaphone,
  BarChart3,
  Mail,
  Target,
} from "lucide-react";

const DigitalMarketingScreen = () => {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      desc: "Rank higher on Google with technical SEO, on-page optimization, content strategy, and local SEO for Surat and global markets.",
    },
    {
      icon: Megaphone,
      title: "Google & Social Media Ads",
      desc: "ROI-focused paid campaigns on Google Ads, Facebook, Instagram, and LinkedIn — optimized for leads, not just clicks.",
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      desc: "Blog posts, landing pages, and case studies that attract your ideal customers and establish your brand as an industry authority.",
    },
    {
      icon: Target,
      title: "Conversion Rate Optimization",
      desc: "Turn more visitors into customers with landing page optimization, A/B testing, UX improvements, and strategic CTA placement.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      desc: "Automated email sequences, newsletters, and drip campaigns that nurture leads and drive repeat business.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      desc: "Monthly performance dashboards tracking traffic, rankings, ad spend, leads, and ROI — with clear actionable insights.",
    },
  ];

  return (
    <Fragment>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3">
              Our Marketing Services
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
              Grow Your Business <span className="text-brand-500">Online</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              From startups to established brands — we create marketing strategies that generate
              qualified leads and measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed m-0">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection
        serviceName="Digital Marketing"
        features={[
          { icon: Search, title: "Proven SEO Strategies" },
          { icon: TrendingUp, title: "Data-Driven Campaigns" },
          { icon: Target, title: "Lead-Focused Approach" },
          { icon: BarChart3, title: "Transparent Reporting" },
          { icon: Megaphone, title: "Multi-Channel Reach" },
          { icon: Mail, title: "Automated Nurturing" },
        ]}
      />

      <ServiceContactSection title="Digital Marketing" />
    </Fragment>
  );
};

export default DigitalMarketingScreen;
