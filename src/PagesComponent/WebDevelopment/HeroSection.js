import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import ClientWeServe from "@/commonComponent/ClientWeServe";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const HEADER_COLOR = "#2a64f9";
const CUSTOM_BLUE = "#3f689f"; // User requested color
const ACCENT = CUSTOM_BLUE;
const SKY = "#60a5fa";

const SATELLITES = [
  { id: 'dev', angle: -90, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /><path d="M12 5h8M12 11h8" opacity="0.4" /></svg> },
  { id: 'search', angle: -54, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg> },
  { id: 'mail', angle: -18, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> },
  { id: 'cloud', angle: 18, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" /></svg> },
  { id: 'shield', angle: 54, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { id: 'gear', angle: 90, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> },
  { id: 'mobile', angle: 126, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg> },
  { id: 'database', angle: 162, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
  { id: 'layers', angle: 198, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg> },
  { id: 'edit', angle: 234, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg> },
];

const WebDevHeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    setMounted(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRadius = () => {
    if (windowWidth < 480) return 130;
    if (windowWidth < 768) return 180;
    if (windowWidth < 992) return 220;
    return 250;
  };

  const getPos = (angle, radius) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    };
  };

  const radius = getRadius();
  const center = windowWidth < 480 ? 150 : (windowWidth < 768 ? 200 : (windowWidth < 992 ? 250 : 300));

  return (
    <Fragment>
      <ServiceHeroBackground>
        <section
          className="d-flex align-items-center"
          style={{ flexGrow: 1, width: "100%", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-6 text-start" data-aos="fade-right">
                <div className="pe-lg-5">
                  <h1 className="mb-4" style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.2",
                    color: BRAND_BLUE,
                    fontWeight: "900",
                    letterSpacing: "-0.03em",
                  }}>
                    Engineering High-Performance Web Ecosystems
                  </h1>
                  <div style={{
                    width: "50px", height: "4px",
                    background: `linear-gradient(90deg, ${ACCENT}, ${SKY})`,
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
                    We build high-performance, enterprise-grade web applications that drive growth. From concept to full deployment, our modern web solutions are designed for scalability, speed, and clean aesthetics.
                  </p>
                </div>
              </div>

              {/* Right Visual: Stable Adaptive Hub & Satellites */}
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center" data-aos="zoom-in">
                <div className="webvis-container">

                  {/* Adaptive Connectors */}
                  {mounted && SATELLITES.map((sat, i) => {
                    const pos = getPos(sat.angle, radius);
                    return (
                      <Fragment key={sat.id}>
                        <svg className="webvis-connector" width={center * 2} height={center * 2}>
                          <line
                            x1={center} y1={center}
                            x2={center + pos.x} y2={center + pos.y}
                          />
                        </svg>
                        <div
                          className="webvis-satellite"
                          style={{
                            left: `calc(50% + ${pos.x}px - ${windowWidth < 480 ? 20 : (windowWidth < 768 ? 25 : 30)}px)`,
                            top: `calc(50% + ${pos.y}px - ${windowWidth < 480 ? 20 : (windowWidth < 768 ? 25 : 30)}px)`,
                            animation: `webvis-float ${5 + i * 0.4}s ease-in-out infinite`,
                            animationDelay: `-${i * 0.9}s`
                          }}
                        >
                          {sat.icon}
                        </div>
                      </Fragment>
                    );
                  })}

                  {/* Central Hub: Stable Text & Pure Visual */}
                  <div className="webvis-core-hub">
                    <div className="webvis-core-content">
                      <div className="webvis-core-logo">
                        <svg viewBox="0 0 100 100" fill="none">
                          {/* Central Web Node Visual - No decorative dots */}
                          <rect x="20" y="20" width="60" height="60" rx="15" stroke={ACCENT} strokeWidth="4" fill={`${ACCENT}08`} />
                          <circle cx="50" cy="50" r="12" stroke={ACCENT} strokeWidth="3" />
                          <path d="M50 20 L50 80 M20 50 L80 50" stroke={ACCENT} strokeWidth="1.5" opacity="0.3" />
                        </svg>
                      </div>
                      <div className="webvis-core-text">
                        WEB STUDIO<br /><span style={{ color: ACCENT, fontSize: 'inherit', fontWeight: '800' }}>ARCHITECTURE</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>
      <ClientWeServe />
    </Fragment>
  );
};

export default WebDevHeroSection;
