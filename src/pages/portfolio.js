import { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { SITE_STATS } from "@/lib/constants";
import "./portfolio.css";

const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const OurPortfolio = dynamic(
  () => import("@/PagesComponent/HomePage/OurPortfolio")
);
const ConsultationCTA = dynamic(() => import("@/commonComponent/ConsultationCTA"));
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const PORTFOLIO_HIGHLIGHTS = [
  "Banking & FinTech platforms",
  "EdTech & learning products",
  "AI-powered digital products",
  "Enterprise cloud systems",
];

const Portfolio = () => {
  return (
    <Fragment>
      <Head>
        <title>Our Portfolio | Web & Mobile Projects | KOLI Infotech</title>
        <meta
          name="description"
          content="Explore KOLI Infotech's portfolio — banking, EdTech, AI, and enterprise projects. See how we turn ideas into impactful digital solutions."
        />
      </Head>

      <section className="portfolio-hero relative overflow-hidden">
        <div className="portfolio-hero__glow portfolio-hero__glow--left" aria-hidden="true" />
        <div className="portfolio-hero__glow portfolio-hero__glow--right" aria-hidden="true" />
        <div className="portfolio-hero__grid" aria-hidden="true" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 pt-28 pb-14 md:pt-32 md:pb-20 text-center">
          <p className="portfolio-hero__brand mb-4">Our Portfolio</p>

          <h1 className="commanFont text-[clamp(1.75rem,4.2vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-brand-900 mb-5">
            Work That Speaks{" "}
            <span className="text-brand-500">for Itself</span>
          </h1>

          <p className="subText commanFont text-[clamp(1rem,1.8vw,1.15rem)] text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            From banking giants to AI startups — explore how we&apos;ve helped businesses
            across industries design, build, and scale software that drives measurable results.
          </p>

          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Every project below reflects our focus on clean architecture, strong UX, and
            reliable delivery — built for growth, security, and long-term performance.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-9">
            {PORTFOLIO_HIGHLIGHTS.map((item) => (
              <span key={item} className="portfolio-hero__chip">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center min-h-[52px] min-w-[220px] px-8 py-3 rounded-full bg-brand-500 text-white font-bold text-sm uppercase tracking-wide hover:bg-brand-600 hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline shadow-md"
            >
              Start Your Project
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center min-h-[52px] min-w-[220px] px-8 py-3 rounded-full bg-white text-brand-700 font-bold text-sm uppercase tracking-wide border border-brand-200 hover:border-brand-400 hover:bg-brand-50 hover:-translate-y-0.5 transition-all no-underline"
            >
              Get Free Consultation
            </Link>
          </div>

          <div className="portfolio-hero__stats mx-auto max-w-3xl">
            {SITE_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`portfolio-hero__stat ${index > 0 ? "portfolio-hero__stat--border" : ""}`}
              >
                <p className="text-2xl md:text-3xl font-black text-brand-500 m-0 leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] md:text-xs font-semibold text-slate-500 m-0 mt-2 uppercase tracking-[0.14em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientWeServe />
      <OurPortfolio showViewAll={false} limit={6} />
      <ConsultationCTA />
      <FinalCTA />

      
    </Fragment>
  );
};

export default Portfolio;
