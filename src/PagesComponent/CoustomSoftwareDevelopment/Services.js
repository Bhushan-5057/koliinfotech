import React, { Fragment, useEffect } from "react";
import {
  CSD_P1,
  CSD_P2,
  CSD_P3,
  CSD_P4,
  CSD_P5,
  CSD_P6,
  CSD_P7,
  CSD_P8,
} from "@/commonComponent/commanText";
import Image from "next/image";
import Digital_new from "@/assets/images/Digital_new.webp";
import product_engineering_new from "@/assets/images/product_engineering_new.webp";
import enterprice_app_new from "@/assets/images/enterprise_app.webp";
import Integration_service_new from "@/assets/images/integration_service.webp";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import { Code, Cpu, Layers, RefreshCw, Settings, Zap } from "lucide-react";
import "./Services.css";

const CustomSoftwareDServices = () => {
return (
    <Fragment>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <span className="premium-badge mb-3 d-inline-block">Digital Growth</span>
              <h3 className="premium-heading mb-2 mt-4">
                Digital Transformation
              </h3>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P1}</p>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P2}</p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <Image
                className="img-fluid img-responsive rounded mb-5"
                src={Digital_new}
                alt="Digital Transformation"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection
        serviceName="Custom Software Development"
        features={[
          { icon: Code, title: "Tailored Business Solutions" },
          { icon: Cpu, title: "Digital Transformation" },
          { icon: Layers, title: "Enterprise Application Development" },
          { icon: Settings, title: "System Integration Services" },
          { icon: RefreshCw, title: "Agile Product Engineering" },
          { icon: Zap, title: "High-Performance Architecture" },
        ]}
      />

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded mb-lg-5 mb-0"
                src={product_engineering_new}
                alt="Product Engineering"
              />
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <span className="premium-badge mb-3 d-inline-block">Modern Engineering</span>
              <h3 className="premium-heading mb-4 mt-4">Product Engineering</h3>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P3}</p>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P4}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <span className="premium-badge mb-3 d-inline-block">Scaling Business</span>
              <h3 className="premium-heading mb-4 mt-4">
                Enterprise Applications
              </h3>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P5}</p>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P6}</p>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <Image
                className="img-fluid img-responsive rounded mb-lg-5 mb-0"
                src={enterprice_app_new}
                alt="Enterprise Applications"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center text-center text-lg-start flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded mb-lg-5 mb-0"
                src={Integration_service_new}
                alt="Integration Services"
                style={{ maxWidth: "450px", width: "100%", margin: "0 auto" }}
              />
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <span className="premium-badge mb-3 d-inline-block">Seamless Flow</span>
              <h3 className="premium-heading mb-4 mt-4">Integration Services</h3>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P7}</p>
              <p className="service-desc mx-auto mx-lg-0">{CSD_P8}</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactSection title="Custom Software Development" />
      
    </Fragment>
  );
};

export default CustomSoftwareDServices;
