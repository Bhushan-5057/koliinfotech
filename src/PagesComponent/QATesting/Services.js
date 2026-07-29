import React, { Fragment, useEffect } from "react";
import {
  AIML_P5,
  AIML_P6,
  QATEST_P1,
  QATEST_P2,
  QATEST_P3,
  QATEST_P4,
  QATEST_P7,
  QATEST_P8,
} from "@/commonComponent/commanText";
import Image from "next/image";
import automationTesting from "../../assets/images/automation_testing.webp";
import manualtesting from "../../assets/images/manualtesting.gif";
import securitySoftwareTesting from "../../assets/images/securitySoftwareTesting.gif";
import performanceTesting from "../../assets/images/performance_testing.webp";
import ApiTesting from "../../assets/images/api_testing.webp";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import { CheckCircle, ShieldCheck, Zap, Code, Activity, Target } from "lucide-react";
import "./Services.css";

const QaAndTestingServices = () => {
return (
    <Fragment>
      <section className="mb-5 why-choos" style={{ marginTop: "120px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Efficiency</span>
              <h3 className="premium-heading">Automation Testing</h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{QATEST_P1}</p>
              <p className="service-desc">{QATEST_P2}</p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded"
                src={automationTesting}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection
        serviceName="QA Testing"
        features={[
          { icon: CheckCircle, title: "Manual & Automated Testing" },
          { icon: ShieldCheck, title: "Security Software Testing" },
          { icon: Zap, title: "Performance & Load Testing" },
          { icon: Code, title: "API & Integration Testing" },
          { icon: Activity, title: "Regression & Smoke Testing" },
          { icon: Target, title: "Bug Tracking & Reporting" },
        ]}
      />

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded"
                src={manualtesting}
                alt="Image not found"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Precision</span>
              <h3 className="premium-heading">Manual Testing</h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{QATEST_P3}</p>
              <p className="service-desc">{QATEST_P4}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Fortification</span>
              <h3 className="premium-heading">
                Security Software Testing
              </h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{AIML_P5}</p>
              <p className="service-desc">{AIML_P6}</p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded"
                src={securitySoftwareTesting}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded"
                src={performanceTesting}
                alt="Image not found"
              />
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Velocity</span>
              <h3 className="premium-heading">Performance Testing</h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{QATEST_P7}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Connectivity</span>
              <h3 className="premium-heading">API Testing</h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{QATEST_P8}</p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
              <Image
                className="img-fluid img-responsive rounded"
                src={ApiTesting}
                alt="Image not found"
              />
            </div>
          </div>
        </div>
      </section>
      <ServiceContactSection title="QA Testing" />
      
    </Fragment>
  );
};

export default QaAndTestingServices;
