import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";
const SKY = "#60a5fa";

const SATELLITES = [
  { id: 1, angle: 210, icon: <svg width="24" height="24" fill={BRAND_BLUE} viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>, label: "Security" },
  { id: 2, angle: 170, icon: <svg width="24" height="24" fill={BRAND_BLUE} viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" /></svg>, label: "Cloud" },
  { id: 3, angle: 130, icon: <svg width="24" height="24" fill={BRAND_BLUE} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>, label: "Analytics" },
  { id: 4, angle: 50, icon: <svg width="24" height="24" fill={BRAND_BLUE} viewBox="0 0 24 24"><path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm7-4h-3v2h3v3h2V6c0-1.1-.9-2-2-2zM8 4H5c-1.1 0-2 .9-2 2v3h2V6h3V4zM5 18h3v2H5c-1.1 0-2-.9-2-2v-3h2v3zm13 0h-3v2h3c1.1 0 2-.9 2-2v-3h-2v3z" /></svg>, label: "Core" },
  { id: 5, angle: 10, icon: <svg width="24" height="24" fill={BRAND_BLUE} viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" /></svg>, label: "Desktop" },
  { id: 6, angle: -30, icon: <svg width="24" height="24" fill={BRAND_BLUE} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>, label: "Global" },
];

const CustomSoftwareHeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dynamic sizes based on screen
  const containerW = isMobile ? 280 : 500;
  const containerH = isMobile ? 260 : 400;
  const radius = isMobile ? 100 : 160;
  const centralSize = isMobile ? 80 : 120;
  const centralIconSize = isMobile ? 36 : 60;
  const satSize = isMobile ? 40 : 60;
  const satHalf = satSize / 2;
  const satIconSize = isMobile ? 16 : 24;

  const getPos = (angle, r) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * r,
      y: Math.sin(rad) * r,
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
              <div className="col-lg-7 text-start" data-aos="fade-up">
                <div className="pe-lg-5">
                  <h1 className="mb-4" style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.25",
                    color: BRAND_BLUE,
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                  }}>
                    Precision Custom Software Solutions: Turning Your Vision Into Digital Reality
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
                    Turning Imagination into Excellence: From Concept to Perfection, we craft your digital dreams with meticulous attention to quality. Let us elevate your vision into a seamless, scalable software reality.
                  </p>
                </div>
              </div>

              {/* Right: Hub & Spoke SVG Graphic */}
              <div className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center" data-aos="fade-left">
                <div
                  className="hubvis-container"
                  style={{
                    width: `${containerW}px`,
                    height: `${containerH}px`,
                  }}
                >

                  {/* Connection Lines & Glowing Dots */}
                  <svg style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
                    {SATELLITES.map((sat) => {
                      const pos = getPos(sat.angle, radius);
                      return (
                        <line
                          key={sat.id}
                          className="hubvis-connection-line"
                          x1="50%" y1="50%"
                          x2={`calc(50% + ${pos.x}px)`} y2={`calc(50% + ${pos.y}px)`}
                          style={{ animationDelay: `${sat.id * 0.2}s` }}
                        />
                      );
                    })}
                    {/* Ring Path similar to reference image */}
                    <path
                      d={isMobile ? "M 60,130 A 80,80 0 0 1 220,130" : "M 120,200 A 130,130 0 0 1 380,200"}
                      fill="none"
                      stroke={SKY}
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      opacity="0.2"
                    />
                  </svg>

                  {/* Central Hub */}
                  <div className="hubvis-central-node" style={{ width: `${centralSize}px`, height: `${centralSize}px` }}>
                    <svg width={centralIconSize} height={centralIconSize} viewBox="0 0 24 24" fill="none" stroke={BRAND_BLUE} strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>

                  {/* Satellite Icons */}
                  {mounted && SATELLITES.map((sat) => {
                    const pos = getPos(sat.angle, radius);
                    return (
                      <div
                        key={sat.id}
                        className="hubvis-satellite"
                        style={{
                          width: `${satSize}px`,
                          height: `${satSize}px`,
                          left: `calc(50% + ${pos.x}px - ${satHalf}px)`,
                          top: `calc(50% + ${pos.y}px - ${satHalf}px)`,
                        }}
                      >
                        {React.cloneElement(sat.icon, { width: satIconSize, height: satIconSize })}
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default CustomSoftwareHeroSection;
