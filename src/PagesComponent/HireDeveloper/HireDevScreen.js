import React, { Fragment, useEffect } from "react";import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import "./HireDevScreen.css";
import {
  Users,
  Code,
  Target,
  Clock,
  Star,
  Shield,
  MessageSquare,
  Rocket,
  FileCheck,
  DollarSign,
} from "lucide-react";

const BRAND_BLUE = "#3f689f";
const SKY = "#60a5fa";
const DARK = "#1e293b";

/* ─── WHY HIRE DATA (Enriched) ─── */
const whyHireData = [
  {
    icon: Users,
    title: "Vetted Dedicated Teams",
    desc: "Our rigorous 5-stage vetting process ensures you get top 1% talent. Developers work exclusively on your project as a seamless extension of your core team, adopting your culture and tools.",
  },
  {
    icon: Clock,
    title: "Agile Engagement Models",
    desc: "Stay responsive to market changes with flexible hiring. Whether you need an hourly consultant or a full-time squad, our models scale up or down based on your sprint requirements.",
  },
  {
    icon: DollarSign,
    title: "Optimized ROI",
    desc: "Reduce your engineering overhead by up to 60%. Eliminate recruitment, infrastructure, and retention costs while maintains world-class delivery standards and pixel-perfect quality.",
  },
  {
    icon: MessageSquare,
    title: "Syncronized Workflow",
    desc: "Time-zone overlap and fluent communication are our priorities. We use Slack, Jira, and GitHub to ensure you have real-time visibility and zero friction in the development cycle.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    desc: "Don't let talent gaps stall your roadmap. Our bench of pre-vetted specialists can be interviewed and onboarded within 48 to 72 hours, accelerating your time-to-market significantly.",
  },
  {
    icon: FileCheck,
    title: "Full Intellectual Security",
    desc: "Your code and ideas are protected by ironclad legal frameworks. We sign strict NDAs and ensure 100% IP ownership transfer, backed by secure, enterprise-grade data protocols.",
  },
];

/* ─── ENGAGEMENT PROCESS DATA ─── */
const processSteps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We dive deep into your technical needs, project scope, and business goals to define the ideal developer profile.",
  },
  {
    num: "02",
    title: "Talent Matching",
    desc: "Within 24 hours, we present you with pre-vetted profiles. You interview and select the talent that fits best.",
  },
  {
    num: "03",
    title: "Seamless Onboarding",
    desc: "We handle the administrative setup. Developers integrate into your tools, rituals, and workflow from day one.",
  },
  {
    num: "04",
    title: "Continuous Growth",
    desc: "Regular performance reviews and feedback loops ensure your project stays on track and quality remains high.",
  },
];



const HireDevScreen = () => {
return (
    <Fragment>
      {/* ═══ SECTION 1 — Why Hire Our Developers (Enhanced Glassmorphic Grid) ═══ */}
      <section className="hd-why-section">
        <div className="hd-bg-glow"></div>
        <div className="hd-grid-dots"></div>
        
        <div className="container position-relative">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="hd-eyebrow">The Koli Advantage</span>
            <h2 className="hd-section-title">
              Why Hire <span className="hd-accent">Our Developers?</span>
            </h2>
            <p className="hd-section-sub">
              Stop searching and start building. We provide high-bandwidth engineers who bring expertise, ownership, and technical velocity to your product roadmap.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {whyHireData.map((item, idx) => (
              <div
                className="col-lg-4 col-md-6"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="hd-glass-card">
                  <div className="hd-glass-icon-box">
                    <item.icon size={26} />
                  </div>
                  <h4 className="hd-glass-title">{item.title}</h4>
                  <p className="hd-glass-desc">{item.desc}</p>
                  <div className="hd-glass-blur"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — Our Engagement Process (New) ═══ */}
      <section className="hd-process-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="hd-eyebrow-alt">Step-by-Step</span>
            <h2 className="hd-section-title">
              Our <span className="hd-accent">Engagement Process</span>
            </h2>
          </div>

          <div className="row g-0 justify-content-center pt-4">
            {processSteps.map((step, idx) => (
              <div 
                className="col-lg-3 col-md-6" 
                key={idx} 
                data-aos="fade-up" 
                data-aos-delay={idx * 150}
              >
                <div className="hd-step-item">
                  <div className="hd-step-num-wrap">
                    <span className="hd-step-num">{step.num}</span>
                    <div className="hd-step-line"></div>
                  </div>
                  <h5 className="hd-step-title">{step.title}</h5>
                  <p className="hd-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ═══ Existing Sections (unchanged) ═══ */}
      {/* ═══ Redundant Section (Commented Out) ═══ */}
      {/* 
      <ServiceWhyChooseSection
        serviceName="Hire Developer"
        features={[
          { icon: Users, title: "Dedicated Expert Developers" },
          { icon: Code, title: "Full Stack & Specialized Talent" },
          { icon: Clock, title: "Flexible Hiring Models" },
          { icon: Target, title: "Focused on Business Goals" },
          { icon: Star, title: "Top-Rated Developers" },
          { icon: Shield, title: "NDA & Secure Collaboration" },
        ]}
      />
      */}
      <ServiceContactSection title="Hire a Developer" />

      {/* ═══ SCOPED STYLES ═══ */}
      
    </Fragment>
  );
};

export default HireDevScreen;
