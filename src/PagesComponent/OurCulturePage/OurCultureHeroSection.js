import React, { Fragment, useEffect } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";const BRAND_BLUE = "#3f689f";
const SKY = "#60a5fa";

const OurCultureHeroSection = () => {
return (
        <Fragment>
            <ServiceHeroBackground>
                <section
                    className="d-flex align-items-center"
                    style={{ flexGrow: 1, width: "100%", paddingTop: "140px", paddingBottom: "100px" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-8 text-center">

                                {/* Pre-title Label */}
                                <div className="d-inline-flex align-items-center gap-2 mb-4 bg-white px-3 py-1 rounded-pill shadow-sm">
                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: SKY }} />
                                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: BRAND_BLUE, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Our Culture
                                    </span>
                                </div>

                                {/* Main Heading */}
                                <h1
                                    className="mb-4"
                                    style={{
                                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                                        lineHeight: "1.25",
                                        color: BRAND_BLUE,
                                        fontWeight: "850",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    People First. Purpose Driven. Built to Grow.
                                </h1>

                                {/* Divider */}
                                <div className="mx-auto" style={{
                                    width: "45px",
                                    height: "3px",
                                    background: `linear-gradient(90deg, ${BRAND_BLUE}, ${SKY})`,
                                    marginBottom: "2rem",
                                    borderRadius: "4px",
                                }} />

                                {/* Description Text */}
                                <p
                                    className="mx-auto"
                                    style={{
                                        fontSize: "0.95rem",
                                        lineHeight: "1.7",
                                        color: "#555",
                                        maxWidth: "700px",
                                        margin: 0,
                                        fontWeight: "500",
                                    }}
                                >
                                    Company culture is crucial for fostering a positive and productive
                                    work environment where collaboration, learning, and impact can
                                    thrive every day. We believe in empowering our team to reach their
                                    full potential while delivering exceptional value.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
            </ServiceHeroBackground>
        </Fragment>
    );
};

export default OurCultureHeroSection;


