import React from "react";

/**
 * ServiceHeroBackground
 * ---------------------
 * Reusable hero wrapper for all service pages.
 * Light ice-blue dot-grid background + premium SVG ring decorations.
 *
 * Usage:
 *   <ServiceHeroBackground>
 *     <section style={{ paddingTop: '140px', paddingBottom: '100px' }}>
 *       ...
 *     </section>
 *   </ServiceHeroBackground>
 */

const BRAND_BLUE = "#3f689f";

const ServiceHeroBackground = ({ children, minHeight = "75vh" }) => {
    return (
        <div
            className="service-hero-wrapper"
            style={{
                position: "relative",
                width: "100%",
                minHeight,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "#f0f5ff",
                backgroundImage: `radial-gradient(${BRAND_BLUE}18 1.2px, transparent 1.2px)`,
                backgroundSize: "36px 36px",
            }}
        >
            <svg
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    pointerEvents: "none",
                    zIndex: 1,
                    overflow: "visible",
                }}
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
            >
                {/* Outer dashed ring — large, subtle */}
                <circle
                    cx="400" cy="0" r="290"
                    stroke={BRAND_BLUE} strokeWidth="0.9" strokeOpacity="0.18"
                    strokeDasharray="9 7"
                />
                {/* Inner dashed ring — tighter, slightly bolder */}
                <circle
                    cx="400" cy="0" r="180"
                    stroke={BRAND_BLUE} strokeWidth="1.1" strokeOpacity="0.26"
                    strokeDasharray="7 6"
                />

                {/* Accent dots at ring edges */}
                <circle cx="110" cy="0" r="3.2" fill={BRAND_BLUE} fillOpacity="0.35" />
                <circle cx="400" cy="290" r="3.2" fill={BRAND_BLUE} fillOpacity="0.35" />
                <circle cx="220" cy="0" r="2.5" fill={BRAND_BLUE} fillOpacity="0.28" />
                <circle cx="400" cy="180" r="2.5" fill={BRAND_BLUE} fillOpacity="0.28" />

                {/* Single floating accent dot inside */}
                <circle cx="340" cy="60" r="2" fill={BRAND_BLUE} fillOpacity="0.2" />
            </svg>

            {/* ═══════════════════════════════════════
                BOTTOM-LEFT: Two dashed rings
                Slightly varied dash patterns
            ══════════════════════════════════════= */}
            <svg
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: 1,
                    overflow: "visible",
                }}
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
            >
                {/* Outer dashed ring */}
                <circle
                    cx="0" cy="220" r="160"
                    stroke={BRAND_BLUE} strokeWidth="0.8" strokeOpacity="0.18"
                    strokeDasharray="8 7"
                />
                {/* Inner dashed ring */}
                <circle
                    cx="0" cy="220" r="95"
                    stroke={BRAND_BLUE} strokeWidth="0.9" strokeOpacity="0.22"
                    strokeDasharray="5 7"
                />

                {/* Edge dots */}
                <circle cx="95" cy="220" r="2.5" fill={BRAND_BLUE} fillOpacity="0.28" />
                <circle cx="0" cy="125" r="2" fill={BRAND_BLUE} fillOpacity="0.22" />
            </svg>

            {/* Very soft ambient glow — top-right */}
            <div
                style={{
                    position: "absolute", top: 0, right: 0,
                    width: "28%", height: "50%",
                    background: `radial-gradient(circle at top right, ${BRAND_BLUE}0d 0%, transparent 65%)`,
                    filter: "blur(40px)",
                    pointerEvents: "none", zIndex: 1,
                }}
            />

            {/* Page content */}
            <div style={{ position: "relative", zIndex: 10, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {children}
            </div>
        </div>
    );
};

export default ServiceHeroBackground;
