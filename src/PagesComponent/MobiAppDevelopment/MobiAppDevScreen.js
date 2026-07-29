import React, { useEffect } from "react";
import Image from "next/image";
import CostumMobi from "../../assets/images/mobile_app_dev.webp";
import { COMMAN_TEXT } from "@/commonComponent/commanText";
import ClientWeServe from "@/commonComponent/ClientWeServe";
import OurServices from "../HomePage/OurServices";
import OurPortfolio from "../HomePage/OurPortfolio";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import { Smartphone, Layout, Zap, Shield, Globe, Code } from "lucide-react";
import "./MobiAppDevScreen.css";

const MobiAppDevScreen = () => {
return (
    <section className="bg-light ">
      <ClientWeServe />
      <div className="container mt-5 py-5">
        <div className="row align-items-center">
          <div className="col-lg-7" data-aos="fade-right">
            <span className="premium-badge mb-3 d-inline-block">App Innovation</span>
            <h2 className="premium-heading mb-4">
              Custom Mobile Application Development
            </h2>
            <div className="premium-divider mb-4"></div>
            <p className="service-desc">{COMMAN_TEXT}</p>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-right">
            <Image
              src={CostumMobi}
              alt="Custom Mobile App Development"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Choose section right after first description block */}
      <ServiceWhyChooseSection
        serviceName="Mobile App Development"
        features={[
          { icon: Smartphone, title: "iOS & Android Native Apps" },
          { icon: Layout, title: "Beautiful UI/UX Design" },
          { icon: Zap, title: "High-Performance Apps" },
          { icon: Shield, title: "App Security & Data Protection" },
          { icon: Globe, title: "Cross-Platform Development" },
          { icon: Code, title: "API & Backend Integration" },
        ]}
      />

      <OurServices />
      <OurPortfolio />
      <ServiceContactSection title="Mobile App Development" />
      
    </section>
  );
};

export default MobiAppDevScreen;
