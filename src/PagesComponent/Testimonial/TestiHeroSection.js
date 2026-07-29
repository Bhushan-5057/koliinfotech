import React, { Fragment, useEffect } from "react";const BRAND_BLUE = "#3f689f";

const TestiHeroSection = () => {
return (
    <Fragment>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-10 col-xl-8 text-center">
              <h1
                className="hero-sec-header"
                style={{ color: BRAND_BLUE, fontWeight: "900" }}
              >
                TESTIMONIALS
              </h1>
              <div
                className="mx-auto mb-4"
                style={{
                  width: "45px",
                  height: "3px",
                  background: BRAND_BLUE,
                  borderRadius: "2px",
                }}
              />
              <p className="para-for-hero mx-auto" style={{ maxWidth: "700px" }}>
                Hear from our valued partners about their journey with KOLI
                Infotech. We pride ourselves on delivering excellence that
                delights our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TestiHeroSection;
