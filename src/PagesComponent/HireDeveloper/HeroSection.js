import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";
const SKY = "#60a5fa";

const HireDevHeroSection = () => {
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
              <div className="col-lg-7 text-start" data-aos="fade-up">
                <div className="pe-lg-5">
                  <h1 className="mb-4" style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.25",
                    color: BRAND_BLUE,
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                  }}>
                    Hire Dedicated Developers to Build Your Next Big Product Faster
                  </h1>
                  <div style={{
                    width: "40px", height: "3px",
                    background: `linear-gradient(90deg, ${BRAND_BLUE}, ${SKY})`,
                    marginBottom: "2.5rem",
                    borderRadius: "4px",
                  }} />
                  <p style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#555",
                    maxWidth: "580px",
                    margin: 0,
                    fontWeight: "500",
                  }}>
                    Access a team of skilled, vetted developers who integrate seamlessly into your workflow. From frontend to backend and everything in between, we provide the right talent to bring your product vision to life on time and on budget.
                  </p>
                </div>
              </div>

              {/* Right: Modern SVG/CSS Hire Developer Graphic */}
              <div className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center" data-aos="fade-left">
                <div style={{ position: "relative", width: "100%", maxWidth: "450px", height: "450px", display: "flex", alignItems: "center", justifyContent: "center" }}>

                  {/* Central Integration Node */}
                  <div className="hirevis-central-node">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>

                  {/* Connecting Lines */}
                  {mounted && (
                    <svg style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}>
                      <line className="hirevis-connection" x1="50%" y1="50%" x2="20%" y2="20%" />
                      <line className="hirevis-connection" x1="50%" y1="50%" x2="80%" y2="20%" style={{ animationDelay: "0.5s" }} />
                      <line className="hirevis-connection" x1="50%" y1="50%" x2="20%" y2="80%" style={{ animationDelay: "1s" }} />
                      <line className="hirevis-connection" x1="50%" y1="50%" x2="80%" y2="80%" style={{ animationDelay: "1.5s" }} />
                    </svg>
                  )}

                  {/* Floating Talent Icons (replacing yellow emojis) */}
                  <div className="hirevis-avatar" style={{ top: "10%", left: "10%", animationDelay: "0s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div className="hirevis-avatar" style={{ top: "10%", right: "10%", animationDelay: "0.5s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="hirevis-avatar" style={{ bottom: "10%", left: "10%", animationDelay: "1s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v10l4.5 4.5"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div className="hirevis-avatar" style={{ bottom: "10%", right: "10%", animationDelay: "1.5s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
                    </svg>
                  </div>

                  {/* Orbiting Ring */}
                  <div style={{ position: "absolute", width: "300px", height: "300px", border: "1px dashed rgba(63,104,159,0.15)", borderRadius: "50%", animation: "aivis-spin 30s linear infinite" }}></div>

                  {/* Team Badge */}
                  <div style={{ position: "absolute", bottom: "0", background: "white", padding: "10px 20px", borderRadius: "50px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", border: "1px solid #edf2f7", fontWeight: "800", color: BRAND_BLUE, fontSize: "0.8rem" }}>
                    Vetted & Integration-Ready
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default HireDevHeroSection;
