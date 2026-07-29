import React, { useEffect, useRef, Fragment } from "react";
import { COMMAN_TEXT } from "@/commonComponent/commanText";import ClientWeServe from "@/commonComponent/ClientWeServe";
import "./SolutionOnDemandScreen.css";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";

const IsometricVisual = ({ type, glowColor = ACCENT }) => {
  const commonProps = {
    viewBox: "0 0 100 100",
    style: { width: '100%', height: '100%', overflow: 'visible' }
  };

  const renderContent = () => {
    switch (type) {
      case 'booking':
        return (
          <g transform="translate(50, 50) rotateX(45) rotateZ(-30)">
            <rect x="-30" y="-30" width="60" height="60" rx="4" fill={glowColor} fillOpacity="0.1" stroke={glowColor} strokeWidth="1" />
            <g className="sol-float-anim-1">
              <rect x="-25" y="-25" width="50" height="15" rx="2" fill="white" fillOpacity="0.8" stroke={glowColor} strokeWidth="0.5" />
              <rect x="-25" y="-5" width="50" height="15" rx="2" fill="white" fillOpacity="0.8" stroke={glowColor} strokeWidth="0.5" style={{ transform: 'translateY(5px)' }} />
              <rect x="-25" y="15" width="50" height="15" rx="2" fill="white" fillOpacity="0.8" stroke={glowColor} strokeWidth="0.5" style={{ transform: 'translateY(10px)' }} />
            </g>
            <path d="M-35 35 L35 35 L35 -35" fill="none" stroke={glowColor} strokeWidth="0.5" strokeOpacity="0.3" />
          </g>
        );
      case 'payments':
        return (
          <g transform="translate(50, 50) rotateX(45) rotateZ(-30)">
            <circle cx="0" cy="0" r="35" fill="none" stroke={glowColor} strokeWidth="0.5" strokeDasharray="4 2" strokeOpacity="0.4" />
            <g className="sol-float-anim-2">
              <rect x="-25" y="-15" width="50" height="30" rx="6" fill="white" fillOpacity="0.9" stroke={glowColor} strokeWidth="1" />
              <rect x="-25" y="-5" width="50" height="8" fill={glowColor} fillOpacity="0.2" stroke="none" />
              <circle cx="15" cy="8" r="4" fill={glowColor} />
            </g>
            <circle cx="0" cy="0" r="40" fill="none" stroke={glowColor} strokeWidth="0.5" strokeOpacity="0.2" />
          </g>
        );
      case 'on-the-go':
        return (
          <g transform="translate(50, 50) rotateX(45) rotateZ(-30)">
            <rect x="-20" y="-35" width="40" height="70" rx="8" fill="none" stroke={glowColor} strokeWidth="1" strokeOpacity="0.5" />
            <g className="sol-float-anim-3">
              <rect x="-15" y="-30" width="30" height="60" rx="6" fill="white" fillOpacity="0.9" stroke={glowColor} strokeWidth="1" />
              <rect x="-10" y="-10" width="20" height="20" rx="2" fill={glowColor} fillOpacity="0.1" />
            </g>
            <circle cx="45" cy="0" r="10" fill="none" stroke={glowColor} strokeWidth="0.5" strokeDasharray="2 2" />
          </g>
        );
      case 'scheduling':
        return (
          <g transform="translate(50, 50) rotateX(45) rotateZ(-30)">
            <circle cx="0" cy="0" r="30" fill="none" stroke={glowColor} strokeWidth="1" strokeOpacity="0.4" />
            <g className="sol-float-anim-1">
              <path d="M0 -25 L0 0 L20 0" fill="none" stroke={glowColor} strokeWidth="2" strokeLinecap="round" />
              <circle cx="0" cy="0" r="35" fill="none" stroke={glowColor} strokeWidth="0.5" />
            </g>
            {[0, 90, 180, 270].map(a => (
              <line key={a} x1="0" y1="0" x2={40 * Math.cos(a * Math.PI / 180)} y2={40 * Math.sin(a * Math.PI / 180)} stroke={glowColor} strokeWidth="0.5" strokeOpacity="0.2" />
            ))}
          </g>
        );
      case 'tracking':
        return (
          <g transform="translate(50, 50) rotateX(45) rotateZ(-30)">
            <g className="sol-float-anim-2">
              <circle cx="0" cy="0" r="8" fill={glowColor} />
              <circle cx="0" cy="0" r="25" fill="none" stroke={glowColor} strokeWidth="1.5" />
              <path d="M-30 0 L30 0" stroke={glowColor} strokeWidth="0.5" />
              <path d="M0 -30 L0 30" stroke={glowColor} strokeWidth="0.5" />
            </g>
            <circle cx="0" cy="0" r="40" fill="none" stroke={glowColor} strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.3" />
          </g>
        );
      case 'communication':
        return (
          <g transform="translate(50, 50) rotateX(45) rotateZ(-30)">
            <g className="sol-float-anim-3">
              <path d="M-25 -20 h50 c4 0 8 4 8 8 v25 c0 4-4 8-8 8 h-12 l-12 8 v-8 h-26 c-4 0-8-4-8-8 v-25 c0-4 4-8 8-8z" fill="white" fillOpacity="0.9" stroke={glowColor} strokeWidth="1" />
              <circle cx="-10" cy="0" r="2" fill={glowColor} />
              <circle cx="0" cy="0" r="2" fill={glowColor} />
              <circle cx="10" cy="0" r="2" fill={glowColor} />
            </g>
            <path d="M-40 40 L40 40 L40 -40" fill="none" stroke={glowColor} strokeWidth="0.5" strokeOpacity="0.2" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className="isometric-wrapper">
      <svg {...commonProps}>
        <defs>
          <filter id="isoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <g filter="url(#isoGlow)">
          {renderContent()}
        </g>
      </svg>
      
    </div>
  );
};

const SolutionOnDemandScreen = () => {
  const data = [
    {
      type: "booking",
      service: "Booking Module",
      badge: "Seamless Scheduling",
      detail: "Our booking module provides a seamless and user-friendly platform for customers to easily book services or appointments.",
    },
    {
      type: "payments",
      service: "In-App Payments",
      badge: "Secure Transactions",
      detail: "Our in-app payments feature enables secure and convenient transactions directly within the app, providing a seamless user experience.",
    },
    {
      type: "on-the-go",
      service: "Ordering on-The-Go",
      badge: "Anywhere, Anytime",
      detail: "Our ordering on-the-go feature allows users to conveniently place orders and make purchases directly from their mobile devices.",
    },
    {
      type: "scheduling",
      service: "Scheduling & Availability",
      badge: "Flexible Planning",
      detail: "Our scheduling feature enables users to easily schedule appointments or orders based on their preferred date, time, and availability.",
    },
    {
      type: "tracking",
      service: "Order Tracking",
      badge: "Real-Time Updates",
      detail: "Our order tracking system allows users to track the progress and status of their orders in real-time, providing transparency.",
    },
    {
      type: "communication",
      service: "Real-Time Communication",
      badge: "Instant Connectivity",
      detail: "Our real-time communication feature enables users to make instant voice and video calls, as well as exchange messages instantly.",
    },
  ];
return (
    <Fragment>
      <section className="mb-5 overflow-hidden">
        <ClientWeServe />
      </section>

      <section className="py-5 mt-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="premium-badge mb-3 d-inline-block">Core Capabilities</span>
            <h2 className="premium-heading">Key Features of On-Demand Solutions</h2>
            <div className="premium-divider mx-auto mt-4"></div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {data.map(({ type, service, detail, badge }, index) => (
              <div key={index} className="col" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-card-premium h-100 text-center">
                  <div className="visual-container-mini mb-4">
                    <div className="glass-orbit-mini">
                      <IsometricVisual type={type} glowColor={index % 2 === 0 ? ACCENT : "#60a5fa"} />
                    </div>
                  </div>

                  <div className="card-content-centered">
                    <span className="premium-badge-mini mb-3 d-inline-block">{badge}</span>
                    <h3 className="feature-title-centered mb-3">{service}</h3>
                    <p className="feature-desc-centered">{detail}</p>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="corner-accent top-right"></div>
                  <div className="corner-accent bottom-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </Fragment>
  );
};

export default SolutionOnDemandScreen;
