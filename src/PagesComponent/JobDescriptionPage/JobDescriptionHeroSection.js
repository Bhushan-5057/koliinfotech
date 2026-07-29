import React, { Fragment, useEffect } from "react";
import Link from "next/link";
const BRAND_BLUE = "#3f689f";

const JobDescriptionHeroSection = () => {
return (
    <Fragment>
      <section
        className="testi-hero-image "
        style={{ backgroundColor: "#E3E3FF" }}
      >
        <div className="container text-center">
          <div className="row justify-content-center" style={{ alignItems: "center" }}>
            <div className="col-lg-10 col-xl-8 mt-5" data-aos="fade-up">
              <h1
                className="hero-sec-header"
                style={{ color: BRAND_BLUE, fontWeight: "900" }}
              >
                Hire Dedicated Developers
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
                Looking to hire a skilled developer to join our team and
                contribute to our projects.
              </p>
              <Link
                href="/contact-us"
                className="btn contact-us-btn m-4 p-2"
                type="button"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default JobDescriptionHeroSection;
