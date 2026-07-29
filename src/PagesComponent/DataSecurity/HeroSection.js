import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#0f172a";
const CUSTOM_BLUE = "#3f689f"; // User theme color
const ACCENT = CUSTOM_BLUE;
const SKY = "#60a5fa";

const DataSecureHeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Fragment>
      <ServiceHeroBackground>
        <section
          className="d-flex align-items-center"
          style={{ flexGrow: 1, width: "100%", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Left: Content */}
              <div className="col-lg-6 text-start" data-aos="fade-right">
                <div className="pe-lg-5">
                  <h1 className="mb-4" style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.2",
                    color: CUSTOM_BLUE,
                    fontWeight: "900",
                    letterSpacing: "-0.03em",
                  }}>
                    Industrial-Grade Cyber Security Solutions
                  </h1>
                  <div style={{
                    width: "50px", height: "4px",
                    background: `linear-gradient(90deg, ${CUSTOM_BLUE}, ${SKY})`,
                    marginBottom: "2.5rem",
                    borderRadius: "4px",
                  }} />
                  <p style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    color: "#475569",
                    maxWidth: "580px",
                    margin: 0,
                    fontWeight: "500",
                  }}>
                    Protect your digital assets with a multi-layered defense strategy. Our comprehensive security HUD monitors global threats, manages secure access, and ensures data integrity through advanced zero-trust protocols.
                  </p>
                </div>
              </div>

              {/* Right: Cyber Tactical HUD Visual */}
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center" data-aos="zoom-in">
                <div className="sechu-viewport">

                  {/* Tactical Connectors */}
                  <svg className="sechu-connector-svg" viewBox="0 0 600 550">
                    {/* Lines from core center (300, 275) to node centers */}
                    <path className="sechu-tac-line" d="M 300 275 L 85 125" style={{ animationDelay: '0.2s' }} />
                    <path className="sechu-tac-line" d="M 300 275 L 515 80" style={{ animationDelay: '0.4s' }} />
                    <path className="sechu-tac-line" d="M 300 275 L 125 425" style={{ animationDelay: '0.6s' }} />
                    <path className="sechu-tac-line" d="M 300 275 L 515 470" style={{ animationDelay: '0.8s' }} />
                  </svg>

                  {/* Central Core Group */}
                  <div className="sechu-core-group">
                    <div className="sechu-ring sechu-ring-1"></div>
                    <div className="sechu-ring sechu-ring-2"></div>
                    <div className="sechu-ring sechu-ring-3"></div>

                    <div className="sechu-shield-hub">
                      <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Orbital Modules */}
                  {mounted && (
                    <>
                      <div className="sechu-orbital-node node-global">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <div className="sechu-orbital-node node-users">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="sechu-orbital-node node-data">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <div className="sechu-orbital-node node-system">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default DataSecureHeroSection;
