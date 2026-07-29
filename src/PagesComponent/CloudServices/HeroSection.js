import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import ClientWeServe from "@/commonComponent/ClientWeServe";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const CUSTOM_BLUE = "#3f689f"; // User theme color
const ACCENT = CUSTOM_BLUE;
const SKY = "#60a5fa";

const NODES = [
  { id: 'mobile', label: 'Mobile', angle: -90, x: 0, y: -200, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg> },
  { id: 'app', label: 'Applications', angle: -45, x: 180, y: -120, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
  { id: 'db', label: 'Database', angle: 0, x: 215, y: 45, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg> },
  { id: 'storage', label: 'Storage', angle: -135, x: -190, y: -130, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg> },
  { id: 'server', label: 'Server', angle: 180, x: -215, y: 45, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg> },
  { id: 'hybrid', label: 'Hybrid Cloud', angle: 45, x: 170, y: 190, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a4.5 4.5 0 1 0-9 0h-1.5a3.5 3.5 0 0 0 0 7h12z" /></svg> },
  { id: 'public', label: 'Public Cloud', angle: 90, x: 0, y: 220, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a4.5 4.5 0 1 0-9 0h-1.5a3.5 3.5 0 0 0 0 7h12z" /></svg> },
  { id: 'private', label: 'Private Cloud', angle: 135, x: -170, y: 190, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
];

const CloudServiceHeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    setMounted(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveCoords = (node) => {
    let scaleFactor = 1;
    if (windowWidth < 480) scaleFactor = 0.62;
    else if (windowWidth < 768) scaleFactor = 0.75;
    else if (windowWidth < 992) scaleFactor = 0.88;
    else if (windowWidth < 1200) scaleFactor = 0.95;

    return {
      x: node.x * scaleFactor,
      y: node.y * scaleFactor
    };
  };

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
                    color: BRAND_BLUE,
                    fontWeight: "900",
                    letterSpacing: "-0.03em",
                  }}>
                    Enterprise Cloud Computing Solutions
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
                    Empower your organization with a robust cloud ecosystem. We deliver scalable, multi-cloud strategies that integrate seamless storage, server management, and hybrid capabilities for the modern enterprise.
                  </p>
                </div>
              </div>

              {/* Right Visual: Clean Cloud Ecosystem */}
              <div className="col-lg-6 mt-1 mt-lg-0 d-flex justify-content-center" data-aos="zoom-in">
                <div className="cloud-container">

                  {/* Connectors (Dynamic Curves) */}
                  <svg className="cloud-connector" width="600" height="520" viewBox="0 0 600 520">
                    {mounted && NODES.map((node, i) => {
                      const coords = getResponsiveCoords(node);
                      const startX = 300;
                      const startY = 260;
                      const endX = 300 + coords.x;
                      const endY = 260 + coords.y;

                      const midX = (startX + endX) / 2;
                      const midY = (startY + endY) / 2;

                      return (
                        <path
                          key={`c-${node.id}`}
                          d={`M ${startX} ${startY} Q ${midX + (coords.x * 0.1)} ${midY + (coords.y * -0.1)} ${endX} ${endY}`}
                        />
                      );
                    })}
                  </svg>

                  {/* Satellite nodes */}
                  {mounted && NODES.map((node, i) => {
                    const coords = getResponsiveCoords(node);
                    const nodeSize = windowWidth < 480 ? 70 : (windowWidth < 768 ? 76 : 82);
                    return (
                      <div
                        key={node.id}
                        className="cloud-node"
                        style={{
                          left: `calc(50% + ${coords.x}px - ${nodeSize / 2}px)`,
                          top: `calc(50% + ${coords.y}px - ${nodeSize / 2}px)`,
                          animationDelay: `${0.1 + i * 0.08}s`
                        }}
                      >
                        {node.icon}
                        <span className="cloud-node-label">{node.label}</span>
                      </div>
                    );
                  })}

                  {/* Central Hub: Pure Cloud Icon (No Text) */}
                  <div className="cloud-hub">
                    <svg className="cloud-hub-svg" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19a3.5 3.5 0 0 0 0-7h-1.5a4.5 4.5 0 1 0-9 0h-1.5a3.5 3.5 0 0 0 0 7h12z" fill="white" strokeWidth="1.2" />
                    </svg>
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

export default CloudServiceHeroSection;
