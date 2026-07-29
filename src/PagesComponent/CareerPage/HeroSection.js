import React, { Fragment } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";

const CareerPageHeroSection = () => {
  const LABELS = [
    { top: '10%', left: '70%', text: 'Innovation', delay: '0s' },
    { top: '80%', left: '20%', text: 'Culture', delay: '1s' },
    { top: '30%', left: '5%', text: 'Impact', delay: '2s' },
    { bottom: '20%', right: '5%', text: 'Growth', delay: '1.5s' },
  ];

  return (
    <Fragment>
      <ServiceHeroBackground>
        {/* Monochromatic Depth Accents */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: `radial-gradient(circle at 70% 30%, ${BRAND_BLUE}08 0%, transparent 60%)`,
          pointerEvents: 'none'
        }} />

        <section
          className="d-flex align-items-center"
          style={{ flexGrow: 1, width: "100%" }}
        >
          <div className="container" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
            <div className="row justify-content-center">
              {/* Centered Content */}
              <div className="col-lg-10 col-xl-8 text-center" data-aos="fade-up">
                <h1 className="mb-4" style={{
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  lineHeight: "1.1",
                  color: BRAND_BLUE,
                  fontWeight: "900",
                  letterSpacing: "-0.04em",
                }}>
                  Architecting Your <br />
                  Professional Evolution
                </h1>

                <div className="mx-auto" style={{
                  width: "45px",
                  height: "3px",
                  background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_BLUE}44)`,
                  marginBottom: "2rem",
                  borderRadius: "4px",
                }} />

                <p className="mx-auto" style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  color: "#475569",
                  maxWidth: "600px",
                  fontWeight: "500",
                  marginBottom: "2rem"
                }}>
                  Join an environment engineered for excellence.
                  KOLI Infotech is where your expertise meets our institutional vision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default CareerPageHeroSection;
