import React, { Fragment } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";
const SKY = "#60a5fa";

const SolutionOnDemandHeroSection = () => {
  const SLABS = [
    { icon: '💳', label: 'Payments', top: '20px', left: '125px', delay: '0s' },
    { icon: '🔒', label: 'Security', bottom: '20px', left: '125px', delay: '0.5s' },
    { icon: '📊', label: 'Analytics', top: '125px', left: '20px', delay: '1s' },
    { icon: '☁️', label: 'Cloud', top: '125px', right: '20px', delay: '1.5s' },
  ];

  return (
    <Fragment>
      <ServiceHeroBackground>
        <section
          className="d-flex align-items-center"
          style={{ flexGrow: 1, width: "100%", paddingTop: "140px", paddingBottom: "100px" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              {/* --- CENTERED: Text Content --- */}
              <div className="col-lg-10 col-xl-8 text-center" data-aos="fade-up">
                <h1 className="mb-4" style={{
                  fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                  lineHeight: "1.2",
                  color: BRAND_BLUE,
                  fontWeight: "900",
                  letterSpacing: "-0.04em",
                }}>
                  Architecting Custom Digital Ecosystems
                </h1>

                <div className="mx-auto" style={{
                  width: "60px", height: "4px",
                  background: `linear - gradient(90deg, ${BRAND_BLUE}, ${SKY})`,
                  marginBottom: "2.5rem",
                  borderRadius: "4px",
                }} />

                <p className="mx-auto" style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#475569",
                  maxWidth: "700px",
                  fontWeight: "500",
                  marginBottom: "2.5rem"
                }}>
                  We build high-performance, future-proof software solutions optimized for scale.
                  From complex financial integrations to real-time supply chain tracking,
                  our engineered ecosystems empower your business to lead in a connected world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default SolutionOnDemandHeroSection;
