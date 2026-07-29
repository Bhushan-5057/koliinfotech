import React, { useEffect, useState } from "react";
import Image from "next/image";
import ServiceHeroBackground from "./ServiceHeroBackground";
import "./ServiceHeroSection.css";

const BRAND_BLUE = "#3f689f";

/* ─── Floating tech chips shown when enhanced=true ─────────────────────── */
const CHIPS = [
    { text: "Machine Learning", emoji: "🤖", top: "6%", left: "-2%" },
    { text: "Neural Networks", emoji: "🧠", top: "68%", left: "-4%" },
    { text: "Generative AI", emoji: "✨", top: "8%", right: "-4%" },
    { text: "IoT & Edge", emoji: "📡", top: "72%", right: "-2%" },
];

const ServiceHeroSection = ({
    title,
    description,
    image,
    imageAlt = "Service Illustration",
    enhanced = false,
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <ServiceHeroBackground>
            <section
                className="d-flex align-items-center"
                style={{
                    flexGrow: 1,
                    width: "100%",
                    paddingTop: "140px",
                    paddingBottom: "100px",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">

                        {/* ── Left: Title + Description ─────────────────────────────── */}
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
                                    {title}
                                </h1>

                                {/* Accent line */}
                                <div
                                    style={{
                                        width: "40px",
                                        height: "3px",
                                        backgroundColor: BRAND_BLUE,
                                        marginBottom: "2.5rem",
                                        borderRadius: "4px",
                                        opacity: 0.6,
                                    }}
                                />

                                <p
                                    style={{
                                        fontSize: "1.05rem",
                                        lineHeight: "1.8",
                                        color: "#555",
                                        maxWidth: "580px",
                                        margin: 0,
                                        fontWeight: "500",
                                    }}
                                >
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* ── Right: Image ──────────────────────────────────────────── */}
                        <div className="col-lg-5 mt-5 mt-lg-0" data-aos="fade-left">

                            {enhanced ? (
                                /* ── ENHANCED image frame ──────────────────────────────── */
                                <div style={{ position: "relative", padding: "48px" }}>

                                    {/* Floating tech chips */}
                                    {mounted && CHIPS.map((c, i) => (
                                        <div
                                            key={i}
                                            className="shs-chip"
                                            style={{
                                                top: c.top,
                                                left: c.left,
                                                right: c.right,
                                                "--bob-dur": `${3.2 + i * 0.4}s`,
                                                "--bob-delay": `${i * 0.35}s`,
                                            }}
                                        >
                                            <span>{c.emoji}</span>
                                            {c.text}
                                        </div>
                                    ))}

                                    {/* Outer slow-spin dashed ring */}
                                    {mounted && (
                                        <div
                                            style={{
                                                position: "absolute", inset: 0,
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                pointerEvents: "none", zIndex: 1,
                                            }}
                                        >
                                            <div style={{
                                                width: "94%", height: "94%",
                                                borderRadius: "50%",
                                                border: "1.5px dashed rgba(63,104,159,0.22)",
                                                animation: "shs-spin 22s linear infinite",
                                            }} />
                                        </div>
                                    )}

                                    {/* Inner counter-spin ring */}
                                    {mounted && (
                                        <div
                                            style={{
                                                position: "absolute", inset: "8%",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                pointerEvents: "none", zIndex: 1,
                                            }}
                                        >
                                            <div style={{
                                                width: "100%", height: "100%",
                                                borderRadius: "50%",
                                                border: "1px dashed rgba(91,155,213,0.18)",
                                                animation: "shs-spin-r 14s linear infinite",
                                            }} />
                                        </div>
                                    )}

                                    {/* Glowing image frame */}
                                    <div
                                        style={{
                                            position: "relative", zIndex: 3,
                                            borderRadius: "22px",
                                            padding: "6px",
                                            background: "linear-gradient(135deg, rgba(63,104,159,0.18), rgba(91,155,213,0.12), rgba(255,255,255,0.05))",
                                            animation: mounted ? "shs-pulse 4s ease-in-out infinite" : "none",
                                        }}
                                    >
                                        {/* Soft inner bg */}
                                        <div style={{
                                            borderRadius: "18px",
                                            overflow: "hidden",
                                            background: "radial-gradient(ellipse at 50% 40%, #dbeafe 0%, #eff6ff 55%, #f5f9ff 100%)",
                                        }}>
                                            <Image
                                                src={image}
                                                alt={imageAlt}
                                                className="img-fluid"
                                                priority
                                                style={{
                                                    width: "100%",
                                                    height: "auto",
                                                    maxHeight: "400px",
                                                    objectFit: "contain",
                                                    display: "block",
                                                    filter: "drop-shadow(0 8px 28px rgba(63,104,159,0.14))",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* "Powered by AI" bottom badge */}
                                    {mounted && (
                                        <div style={{
                                            position: "absolute",
                                            bottom: "2%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 8,
                                            background: "rgba(255,255,255,0.88)",
                                            border: "1px solid rgba(63,104,159,0.16)",
                                            borderRadius: 50,
                                            padding: "7px 18px",
                                            backdropFilter: "blur(10px)",
                                            zIndex: 5,
                                            whiteSpace: "nowrap",
                                            boxShadow: "0 4px 18px rgba(63,104,159,0.12)",
                                        }}>
                                            <span style={{
                                                width: 7, height: 7,
                                                borderRadius: "50%",
                                                background: "#22d3ee",
                                                boxShadow: "0 0 6px #22d3ee",
                                                display: "inline-block",
                                                flexShrink: 0,
                                            }} />
                                            <span style={{ color: "#1e3a5f", fontSize: "0.75rem", fontWeight: 700 }}>
                                                Powered by Advanced AI
                                            </span>
                                        </div>
                                    )}

                                </div>
                            ) : (
                                /* ── DEFAULT image (unchanged for all other service pages) ── */
                                <div className="position-relative">
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "50%", left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: "100%", height: "100%",
                                            background: "radial-gradient(circle, rgba(227,227,255,0.4) 0%, transparent 70%)",
                                            filter: "blur(30px)",
                                            zIndex: -1,
                                        }}
                                    />
                                    <Image
                                        src={image}
                                        alt={imageAlt}
                                        className="img-fluid"
                                        priority
                                        style={{
                                            maxHeight: "420px",
                                            objectFit: "contain",
                                            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.04))",
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </ServiceHeroBackground>
    );
};

export default ServiceHeroSection;
