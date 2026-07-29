import Link from "next/link";
import { MoveRight } from "lucide-react";
import "./ServiceContactSection.css";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";

const ServiceContactSection = ({ title = "Development" }) => {
  return (
    <section className="contact-section">
      {/* Refined Premium Light Background */}
      <div className="contact-bg">
        {/* Refined Premium Light Background - Grid and Wavy Lines restored */}
        <svg className="contact-pattern" viewBox="0 0 1440 380" preserveAspectRatio="none">
          <defs>
            <radialGradient id="softGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={ACCENT} stopOpacity="0.1" />
              <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Clean grid lines preserved - wavy line removed */}
          {[...Array(15)].map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="380"
              stroke={BRAND_BLUE} strokeWidth="0.5" strokeOpacity="0.04" />
          ))}
          {[...Array(8)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 55} x2="1440" y2={i * 55}
              stroke={BRAND_BLUE} strokeWidth="0.5" strokeOpacity="0.04" />
          ))}

          {/* Decorative floating dots and glows */}
          <circle cx="1200" cy="80" r="150" fill="url(#softGlow)" />
          <circle cx="200" cy="300" r="100" fill="url(#softGlow)" fillOpacity="0.5" />

          <circle cx="1300" cy="150" r="4" fill={BRAND_BLUE} fillOpacity="0.1" />
          <circle cx="150" cy="100" r="3" fill={ACCENT} fillOpacity="0.1" />
          <circle cx="700" cy="50" r="5" fill={BRAND_BLUE} fillOpacity="0.05" />
        </svg>
      </div>

      <div className="contact-content text-start text-md-center">
        <span className="contact-label w-full d-block text-start text-md-center bg">READY TO START?</span>
        <h3 className="contact-title text-start text-md-center">Looking for {title}?</h3>
        <p className="contact-sub">Get a free consultation and transparent quote — we respond within 24 hours.</p>
        <div className="d-flex justify-content-center gap-3">
          <Link href="/contact-us" className="text-decoration-none">
            <button type="button" className="contact-btn">
              Get Free Consultation <MoveRight size={20} className="btn-icon" />
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ServiceContactSection;
