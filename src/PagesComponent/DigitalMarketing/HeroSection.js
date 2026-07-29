import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const DigitalMarketingHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Fragment>
      <ServiceHeroBackground>
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
                Digital Growth
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                SEO &amp; Digital Marketing That{" "}
                <span className="text-brand-500">Drives Real Results</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-xl">
                Get found on Google, generate qualified leads, and grow your business with
                data-driven SEO, paid ads, and conversion optimization strategies.
              </p>
              <Link href="/contact-us" className="audit-button">
                Get Free Audit
              </Link>
            </div>

            {mounted && (
              <div className="hidden lg:flex justify-center">
                <div className="dm-viewport" aria-hidden="true">
                  <div className="dm-card" style={{ top: "10%", left: "5%", animationDelay: "0s" }}>
                    <p className="text-xs font-bold text-slate-500 m-0 mb-2">Organic Traffic</p>
                    <p className="text-2xl font-black text-brand-500 m-0">+142%</p>
                  </div>
                  <div className="dm-card" style={{ top: "35%", right: "0%", animationDelay: "0.5s" }}>
                    <p className="text-xs font-bold text-slate-500 m-0 mb-2">Lead Growth</p>
                    <div className="dm-chart-bar">
                      <div className="dm-bar" style={{ height: "30%" }} />
                      <div className="dm-bar" style={{ height: "50%" }} />
                      <div className="dm-bar" style={{ height: "70%" }} />
                      <div className="dm-bar" style={{ height: "90%" }} />
                      <div className="dm-bar" style={{ height: "100%" }} />
                    </div>
                  </div>
                  <div className="dm-card" style={{ bottom: "15%", left: "15%", animationDelay: "1s" }}>
                    <p className="text-xs font-bold text-slate-500 m-0 mb-1">Google Ranking</p>
                    <p className="text-lg font-black text-emerald-600 m-0">#1 Position</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default DigitalMarketingHero;
