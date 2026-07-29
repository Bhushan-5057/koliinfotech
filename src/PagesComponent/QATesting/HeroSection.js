import React, { Fragment } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const CUSTOM_BLUE = "#3f689f"; // User theme color
const ACCENT = CUSTOM_BLUE;
const SKY = "#60a5fa";

const STAGES = [
  { id: '01', label: 'Requirements Analysis' },
  { id: '02', label: 'Plan the Test' },
  { id: '03', label: 'Design Test Cases' },
  { id: '04', label: 'Run Test Cases & Report Bugs' },
  { id: '05', label: 'Perform Regression Testing' },
  { id: '06', label: 'Run Release Tests' }
];

const QaTestingHeroSection = () => {
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
              <div className="col-lg-5 text-start" data-aos="fade-right">
                <div className="pe-lg-5">
                  <h1 className="mb-4" style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.2",
                    color: BRAND_BLUE,
                    fontWeight: "900",
                    letterSpacing: "-0.03em",
                  }}>
                    A Systematic Approach to Excellence
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
                    Quality isn't an accident; it's a result of high intention and sincere effort. Our rigorous 6-stage QA process ensures your software is bug-free, performant, and ready for the world.
                  </p>
                </div>
              </div>

              {/* Right: Stages of QA Process Visual */}
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex justify-content-center" data-aos="zoom-in">
                <div className="qastages-container">
                  {/* Central Hub */}
                  <div className="qastages-hub">
                    <div className="qastages-hub-title">Stages of QA Process</div>
                    {/* <div className="qastages-hub-subtitle">methodology</div> */}
                  </div>

                  {/* Connectors (SVG Curves) */}
                  <svg className="qastages-connector-svg" viewBox="0 0 650 500">
                    <defs>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    {STAGES.map((_, i) => {
                      const startX = 120;
                      const startY = 250;
                      const endX = 370;
                      const endY = 70 + i * 70;
                      return (
                        <path
                          key={i}
                          className="qastage-line"
                          d={`M ${startX} ${startY} C ${startX + 100} ${startY}, ${endX - 100} ${endY}, ${endX} ${endY}`}
                          style={{ animationDelay: `${i * 0.15}s` }}
                          filter="url(#glow)"
                        />
                      );
                    })}
                  </svg>

                  {/* Right Stage Pills */}
                  <div className="qastages-right-list">
                    {STAGES.map((stage, i) => (
                      <div
                        key={stage.id}
                        className="qastage-pill"
                        style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                      >
                        <div className="qastage-number">{stage.id}</div>
                        <div className="qastage-label">{stage.label}</div>
                      </div>
                    ))}
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

export default QaTestingHeroSection;
