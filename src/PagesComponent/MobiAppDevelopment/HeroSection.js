import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";
const SKY = "#60a5fa";

const BADGES = [
  { value: "iOS & Android", label: "Platforms", top: "8%", right: "-28%", delay: "0.4s", dur: "4.4s" },
  { value: "98%", label: "Satisfaction", bottom: "10%", left: "-18%", delay: "0.8s", dur: "3.8s" },
  { value: "50+", label: "Tech Stack", bottom: "10%", right: "-18%", delay: "1.2s", dur: "4.2s" },
];

const MobiAppDevHeroSection = () => {
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

              {/* ── LEFT: Text ─────────────────────────────────────────── */}
              <div className="col-lg-7 text-start" data-aos="fade-up">
                <div className="pe-lg-5">
                  <h1
                    className="mb-4"
                    style={{
                      fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                      lineHeight: "1.25",
                      color: BRAND_BLUE,
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Transform Your Ideas into Powerful Mobile Experiences with Expert App Development
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
                    We design and develop high-performance mobile applications for iOS and Android —
                    from initial sketches to final deployment. Our team crafts intuitive, scalable,
                    and beautiful apps that elevate your brand and engage your users.
                  </p>
                </div>
              </div>

              {/* ── RIGHT: Premium Phone Animation ─────────────────────── */}
              <div
                className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center"
                data-aos="fade-left"
              >
                <div style={{ position: "relative", width: "100%", maxWidth: "320px" }}>

                  {/* Orbit rings */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <div className="mob-orbit-ring" style={{ width: 260, height: 260 }} />
                    <div className="mob-orbit-ring" style={{ width: 360, height: 360, opacity: 0.5 }} />
                  </div>

                  {/* Badge floaters */}
                  {mounted && BADGES.map((b, i) => (
                    <div
                      key={i}
                      className="mob-metric-badge"
                      style={{
                        top: b.top, bottom: b.bottom,
                        left: b.left, right: b.right,
                        "--badge-delay": b.delay,
                        "--badge-dur": b.dur,
                      }}
                    >
                      <span className="mob-metric-val">{b.value}</span>
                      <span className="mob-metric-lbl">{b.label}</span>
                    </div>
                  ))}

                  {/* Phone SVG */}
                  <div className="mob-phone-wrap">
                    <svg
                      viewBox="0 0 260 480"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "100%", height: "auto", position: "relative", zIndex: 2 }}
                    >
                      <defs>
                        <linearGradient id="mobPhoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#e8f0fb" />
                          <stop offset="100%" stopColor="#f4f8ff" />
                        </linearGradient>
                        <linearGradient id="mobAppBar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={BRAND_BLUE} />
                          <stop offset="100%" stopColor={ACCENT} />
                        </linearGradient>
                        <linearGradient id="mobCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={BRAND_BLUE} />
                          <stop offset="100%" stopColor="#2a4d82" />
                        </linearGradient>
                        <filter id="mobPhoneDrop" x="-10%" y="-5%" width="120%" height="115%">
                          <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor={BRAND_BLUE} floodOpacity="0.16" />
                        </filter>
                        <clipPath id="mobScreenClip">
                          <rect x="18" y="50" width="224" height="400" rx="8" />
                        </clipPath>
                      </defs>

                      {/* Phone shell */}
                      <rect x="8" y="8" width="244" height="464" rx="32" fill="url(#mobPhoneBody)" filter="url(#mobPhoneDrop)" stroke={BRAND_BLUE} strokeOpacity="0.18" strokeWidth="1.5" />

                      {/* Side buttons */}
                      <rect x="248" y="100" width="5" height="36" rx="3" fill={BRAND_BLUE} fillOpacity="0.2" />
                      <rect x="248" y="148" width="5" height="60" rx="3" fill={BRAND_BLUE} fillOpacity="0.2" />
                      <rect x="7" y="120" width="5" height="50" rx="3" fill={BRAND_BLUE} fillOpacity="0.15" />

                      {/* Notch */}
                      <rect x="90" y="16" width="80" height="22" rx="11" fill={BRAND_BLUE} fillOpacity="0.12" />
                      <circle cx="130" cy="27" r="5" fill={BRAND_BLUE} fillOpacity="0.25" />

                      {/* Screen background */}
                      <rect x="18" y="50" width="224" height="400" rx="8" fill="#f0f5ff" />

                      {/* App bar */}
                      <rect x="18" y="50" width="224" height="52" rx="0" fill="url(#mobAppBar)" clipPath="url(#mobScreenClip)" />
                      <circle cx="42" cy="76" r="14" fill="white" fillOpacity="0.15" />
                      <text x="62" y="81" fill="white" fontSize="11" fontWeight="700" fontFamily="Outfit,sans-serif">KOLI Infotech</text>
                      <text x="212" y="81" fill="white" fontSize="12" fontFamily="Outfit,sans-serif">🔔</text>

                      {/* Stats Card */}
                      <rect x="28" y="115" width="204" height="78" rx="14" fill="url(#mobCardGrad)" />
                      <text x="46" y="142" fill="white" fontSize="10" fontWeight="600" fontFamily="Outfit,sans-serif" fillOpacity="0.8">Active Projects</text>
                      <text x="46" y="162" fill="white" fontSize="22" fontWeight="800" fontFamily="Outfit,sans-serif">24</text>
                      <text x="46" y="180" fill="white" fontSize="9" fontFamily="Outfit,sans-serif" fillOpacity="0.7">↑ 12% this month</text>
                      {/* Mini chart bars */}
                      <rect x="168" y="160" width="8" height="18" rx="2" fill="white" fillOpacity="0.3" />
                      <rect x="180" y="148" width="8" height="30" rx="2" fill="white" fillOpacity="0.5" />
                      <rect x="192" y="153" width="8" height="25" rx="2" fill="white" fillOpacity="0.4" />
                      <rect x="204" y="144" width="8" height="34" rx="2" fill="white" fillOpacity="0.7" />

                      {/* Service mini cards */}
                      <rect x="28" y="205" width="96" height="72" rx="12" fill="white" stroke={BRAND_BLUE} strokeOpacity="0.15" strokeWidth="1" />
                      <text x="44" y="228" fill={BRAND_BLUE} fontSize="16" fontFamily="Outfit,sans-serif">📱</text>
                      <text x="42" y="248" fill="#1f3d62" fontSize="9" fontWeight="700" fontFamily="Outfit,sans-serif">Mobile Dev</text>
                      <text x="42" y="263" fill="#555" fontSize="8" fontFamily="Outfit,sans-serif">iOS & Android</text>

                      <rect x="136" y="205" width="96" height="72" rx="12" fill="white" stroke={BRAND_BLUE} strokeOpacity="0.15" strokeWidth="1" />
                      <text x="152" y="228" fill={BRAND_BLUE} fontSize="16" fontFamily="Outfit,sans-serif">🎨</text>
                      <text x="150" y="248" fill="#1f3d62" fontSize="9" fontWeight="700" fontFamily="Outfit,sans-serif">UI / UX</text>
                      <text x="150" y="263" fill="#555" fontSize="8" fontFamily="Outfit,sans-serif">120+ designs</text>

                      <rect x="28" y="289" width="96" height="72" rx="12" fill="white" stroke={BRAND_BLUE} strokeOpacity="0.15" strokeWidth="1" />
                      <text x="44" y="312" fill={BRAND_BLUE} fontSize="16" fontFamily="Outfit,sans-serif">⚡</text>
                      <text x="42" y="332" fill="#1f3d62" fontSize="9" fontWeight="700" fontFamily="Outfit,sans-serif">Performance</text>
                      <text x="42" y="347" fill="#555" fontSize="8" fontFamily="Outfit,sans-serif">60fps smooth</text>

                      <rect x="136" y="289" width="96" height="72" rx="12" fill="white" stroke={BRAND_BLUE} strokeOpacity="0.15" strokeWidth="1" />
                      <text x="152" y="312" fill={BRAND_BLUE} fontSize="16" fontFamily="Outfit,sans-serif">🚀</text>
                      <text x="150" y="332" fill="#1f3d62" fontSize="9" fontWeight="700" fontFamily="Outfit,sans-serif">Deployment</text>
                      <text x="150" y="347" fill="#555" fontSize="8" fontFamily="Outfit,sans-serif">App Store ready</text>

                      {/* Bottom Nav */}
                      <rect x="18" y="374" width="224" height="48" rx="0" fill="white" clipPath="url(#mobScreenClip)" />
                      <rect x="18" y="374" width="224" height="1" fill={BRAND_BLUE} fillOpacity="0.1" />
                      <circle cx="62" cy="400" r="12" fill={BRAND_BLUE} fillOpacity="0.1" />
                      <text x="56" y="405" fill={BRAND_BLUE} fontSize="11" fontFamily="Outfit,sans-serif">🏠</text>
                      <text x="118" y="405" fill="#999" fontSize="11" fontFamily="Outfit,sans-serif">💼</text>
                      <text x="178" y="405" fill="#999" fontSize="11" fontFamily="Outfit,sans-serif">👤</text>

                      {/* Home bar */}
                      <rect x="100" y="456" width="60" height="4" rx="2" fill={BRAND_BLUE} fillOpacity="0.2" />
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

export default MobiAppDevHeroSection;
