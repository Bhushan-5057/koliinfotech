"use client";
import React from "react";
import "./ServiceWhyChooseSection.css";

const BRAND_BLUE = "#3f689f";

const ServiceWhyChooseSection = ({ serviceName = "Service", features = [] }) => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="why-choose-heading">
            Why Should You Go For {serviceName}?
          </h2>
        </div>

        <div className="wc-grid">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="wc-grid-item"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="wc-card">
                <div className="wc-icon-box">
                  <item.icon size={22} color="currentColor" />
                </div>
                <p className="wc-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ServiceWhyChooseSection;
