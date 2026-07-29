import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import top_web_application from "../../assets/images/web_application.webp";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import Link from "next/link";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import { Monitor, Globe, ShoppingCart, Layout, Code, Smartphone } from "lucide-react";
import "./WebDevScreen.css";

const WebDevScreen = () => {
  const data = [
    {
      image: require('../../assets/images/user_interface.webp'),
      service: "Custom Web App Development",
      detail:
        "Build powerful web applications tailored to your business — dashboards, portals, SaaS platforms, and internal tools with modern React and Next.js stacks.",
    },
    {
      image: require('../../assets/images/wireframe3.webp'),
      service: "E-commerce Solutions",
      detail:
        "Launch high-converting online stores with payment gateways, inventory management, order tracking, and SEO-optimized product pages.",
    },
    {
      image: require('../../assets/images/webDevimg-2.webp'),
      service: "Technology Consulting",
      detail:
        "Get expert guidance on tech stack selection, architecture planning, scalability strategy, and digital transformation roadmaps.",
    },
    {
      image: require('../../assets/images/quality_test.webp'),
      service: "Web Portal Development",
      detail:
        "Create secure, role-based portals for employees, customers, or partners — with authentication, reporting, and workflow automation.",
    },
    {
      image: require('../../assets/images/wireframe4.webp'),
      service: "Custom CMS Web Development",
      detail:
        "Manage your content effortlessly with custom CMS solutions — easy updates, multi-language support, and SEO-friendly page structures.",
    },
    {
      image: require('../../assets/images/mobile_app_dev.webp'),
      service: "Cross-Platform Apps",
      detail:
        "Reach users on every device with responsive progressive web apps and cross-platform solutions that feel native on mobile and desktop.",
    },
  ];

  const industryWeServe = [
    {
      industry: "Healthcare",
    },
    {
      industry: "Retail & eCommerce",
    },
    {
      industry: "Banking & finance",
    },
    {
      industry: "Entertainment",
    },
    {
      industry: "Education & e-learning",
    },
    {
      industry: "Real estate",
    },
  ];
return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row mt-5" style={{ alignItems: "center" }}>
            <div className="col-lg-6 mb-5" data-aos="fade-right">
              <span className="premium-badge mb-4 d-inline-block">Web Excellence</span>
              <h2 className="premium-heading mb-4 mt-4">
                Top Web Application <span className="web-accent">Development Agency</span>
              </h2>
              <p className="service-desc">{COMMAN_TEXT}</p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center" data-aos="fade-left">
              <Image
                src={top_web_application}
                alt="Top Web Application Development Agency"
                className="img-fluid testi-image"
                style={{ maxWidth: "500px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection
        serviceName="Web Development"
        features={[
          { icon: Monitor, title: "Custom Web App Development" },
          { icon: Globe, title: "Modern SPA & PWA Solutions" },
          { icon: ShoppingCart, title: "E-commerce Platforms" },
          { icon: Layout, title: "Responsive UI/UX Design" },
          { icon: Code, title: "RESTful API Integration" },
          { icon: Smartphone, title: "Cross-Platform Compatibility" },
        ]}
      />

      <section className="web-svcs-section">
        <div className="container">
          <h1 className="text-center pt-5 mt-4 premium-heading">
            Custom Web Application Development Company
          </h1>
          <div className="premium-divider mx-auto mb-5" />
          <div className="row g-4" data-aos="fade-up">
            {data.map(({ service, detail, image }, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="service-card-premium">
                  <div className="card-inner">
                    <div className="card-header-flex">
                      <div className="icon-wrapper">
                        <Image
                          src={image}
                          width={60}
                          height={60}
                          alt={service}
                          className="service-icon-img"
                        />
                      </div>
                      <h4 className="service-title-premium">{service}</h4>
                    </div>
                    <div className="card-body-premium">
                      <p className="service-desc-premium">{detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </section>
      <ServiceContactSection title="Web Development" />
    </Fragment >
  );
};

export default WebDevScreen;
