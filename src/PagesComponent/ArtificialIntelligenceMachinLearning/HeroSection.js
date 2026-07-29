import React, { Fragment, useEffect, useState } from "react";
import ServiceHeroBackground from "@/commonComponent/ServiceHeroBackground";
import "./HeroSection.css";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";
const SKY = "#60a5fa";
const LIGHT_BLUE = "#eff6ff";

const NODES = [
  [0, 260, 210, "AI"],
  [1, 100, 90, "NLP"],
  [2, 260, 60, "CV"],
  [3, 420, 90, "ML"],
  [4, 60, 210, "Data"],
  [5, 460, 210, "IoT"],
  [6, 100, 330, "RL"],
  [7, 260, 360, "DL"],
  [8, 420, 330, "Gen AI"],
];
const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
  [1, 2], [2, 3], [4, 6], [5, 8], [6, 7], [7, 8],
];

/* ── Metric cards ───────────────────────────────────────────────────────── */
const METRICS = [
  { value: "98.5%", label: "Accuracy", top: "4%", left: "-6%", delay: "0s" },
  { value: "2ms", label: "Latency", top: "4%", right: "-6%", delay: "0.4s" },
  { value: "500M+", label: "Parameters", bottom: "6%", left: "-4%", delay: "0.8s" },
  { value: "99.9%", label: "Uptime", bottom: "6%", right: "-4%", delay: "1.2s" },
];

const AiMlHeroSection = () => {
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
                  <h1 className="mb-4" style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
                    lineHeight: "1.25",
                    color: BRAND_BLUE,
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                  }}>
                    Elevate your business with our cutting-edge AI/ML and IoT Services
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
                    From inception to integration, we actualize your AI &amp; ML aspirations
                    through comprehensive cloud development. Elevate your concepts as we
                    seamlessly translate visions into cloud-powered reality.
                  </p>
                </div>
              </div>

              {/* ── RIGHT: Animated Neural Network Visual ─────────────── */}
              <div className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center"
                data-aos="fade-left">
                <div className="aivis-container">

                  {/* Metric floating cards */}
                  {mounted && METRICS.map((m, i) => (
                    <div key={i} className="aivis-metric"
                      style={{
                        top: m.top, bottom: m.bottom,
                        left: m.left, right: m.right,
                        "--delay": m.delay,
                        "--bob-dur": `${3.8 + i * 0.3}s`,
                      }}
                    >
                      <span className="aivis-metric-val">{m.value}</span>
                      <span className="aivis-metric-lbl">{m.label}</span>
                    </div>
                  ))}

                  {/* Ring decorations */}
                  <div className="aivis-orbit-wrap">
                    <div className="aivis-ring" style={{ width: 300, height: 300 }} />
                    <div className="aivis-ring" style={{ width: 400, height: 400, opacity: 0.6 }} />
                  </div>

                  {/* ── SVG Neural Network ─────────── */}
                  <svg
                    viewBox="0 0 520 420"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", height: "auto", position: "relative", zIndex: 2, backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                  >
                    <defs>
                      <radialGradient id="centreGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={SKY} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={SKY} stopOpacity="0" />
                      </radialGradient>

                      <radialGradient id="nodeGrad" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor={LIGHT_BLUE} />
                      </radialGradient>

                      <radialGradient id="centreNodeGrad" cx="30%" cy="30%" r="70%">
                        <stop offset="0%" stopColor={SKY} />
                        <stop offset="100%" stopColor={BRAND_BLUE} />
                      </radialGradient>

                      <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={ACCENT} stopOpacity="0.12" />
                        <stop offset="50%" stopColor={SKY} stopOpacity="0.35" />
                        <stop offset="100%" stopColor={ACCENT} stopOpacity="0.12" />
                      </linearGradient>

                      <filter id="nodeShadow" x="-40%" y="-40%" width="180%" height="180%">
                        <feDropShadow dx="0" dy="2" stdDeviation="4"
                          floodColor={BRAND_BLUE} floodOpacity="0.18" />
                      </filter>
                      <filter id="centreShadow" x="-60%" y="-60%" width="220%" height="220%">
                        <feDropShadow dx="0" dy="0" stdDeviation="10"
                          floodColor={SKY} floodOpacity="0.45" />
                      </filter>
                    </defs>

                    <ellipse cx="260" cy="210" rx="200" ry="160" fill="url(#centreGrad)" />

                    {EDGES.map(([a, b], i) => {
                      const na = NODES[a], nb = NODES[b];
                      return (
                        <line
                          key={`e${i}`}
                          x1={na[1]} y1={na[2]}
                          x2={nb[1]} y2={nb[2]}
                          stroke={`url(#edgeGrad)`}
                          strokeWidth="1.4"
                          strokeDasharray="5 4"
                        />
                      );
                    })}

                    {mounted && EDGES.map(([a, b], i) => (
                      <circle
                        key={`sig${i}`}
                        r="3"
                        fill={i % 2 === 0 ? SKY : ACCENT}
                        fillOpacity="0.85"
                        style={{
                          offsetPath: `path('M${NODES[a][1]},${NODES[a][2]} L${NODES[b][1]},${NODES[b][2]}')`,
                          animation: `aivis-signal ${2.4 + (i % 4) * 0.5}s ease-in-out ${(i * 0.38).toFixed(2)}s infinite`,
                        }}
                      />
                    ))}

                    {NODES.slice(1).map((n, i) => (
                      <g key={`n${i}`} filter="url(#nodeShadow)">
                        <circle
                          cx={n[1]} cy={n[2]} r="22"
                          fill="white"
                          stroke={ACCENT}
                          strokeWidth="1.4"
                          strokeOpacity="0.45"
                          style={{
                            animation: `aivis-node ${2.5 + i * 0.22}s ease-in-out ${(i * 0.18).toFixed(2)}s infinite`,
                          }}
                        />
                        <text
                          x={n[1]} y={n[2] + 1}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={BRAND_BLUE}
                          fontSize="8.5"
                          fontWeight="700"
                          fontFamily="Outfit, sans-serif"
                          letterSpacing="0"
                        >
                          {n[3]}
                        </text>
                      </g>
                    ))}

                    <g filter="url(#centreShadow)">
                      <circle cx="260" cy="210" r="44"
                        fill="none"
                        stroke={SKY}
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        strokeDasharray="6 5"
                        style={{ animation: "aivis-signal 3s linear infinite" }}
                      />
                      <circle
                        cx="260" cy="210" r="28"
                        fill={`url(#centreNodeGrad)`}
                        style={{ animation: "aivis-pulse 2.8s ease-in-out infinite" }}
                      />
                      <text
                        x="260" y="211"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="white"
                        fontSize="11"
                        fontWeight="800"
                        fontFamily="Outfit, sans-serif"
                        letterSpacing="0.5"
                      >
                        AI
                      </text>
                    </g>
                  </svg>

                  {/* "Live" indicator */}
                  {mounted && (
                    <div className="d-none d-lg-flex" style={{
                      position: "absolute",
                      bottom: "-5%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: "rgba(255,255,255,0.82)",
                      border: "1px solid rgba(63,104,159,0.14)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 50,
                      padding: "7px 18px",
                      zIndex: 5,
                      whiteSpace: "nowrap",
                      boxShadow: "0 4px 16px rgba(63,104,159,0.10)",
                      animation: "aivis-fadein 0.6s ease 1.4s both",
                    }}>
                      <span style={{
                        width: 7, height: 7, borderRadius: "50%",
                        background: "#22d3ee",
                        boxShadow: "0 0 7px #22d3ee",
                        display: "inline-block", flexShrink: 0,
                      }} />
                      <span style={{ color: "#1e3a5f", fontSize: "0.74rem", fontWeight: 700 }}>
                        Neural Network • Live Processing
                      </span>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>
      </ServiceHeroBackground>
    </Fragment>
  );
};

export default AiMlHeroSection;
