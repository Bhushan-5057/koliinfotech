import React, { Fragment, useEffect } from "react";
import {
  CLOUDS_P1,
  CLOUDS_P10,
  CLOUDS_P11,
  CLOUDS_P2,
  CLOUDS_P4,
  CLOUDS_P5,
  CLOUDS_P7,
  CLOUDS_P8,
} from "@/commonComponent/commanText";
import aws_copy from "../../assets/images/aws copy.webp";
import gcp from "../../assets/images/gcp.webp";
import jenkins_new from "../../assets/images/jenkins_new.webp";
import kubernets from "../../assets/images/kubernets.webp";
import Image from "next/image";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import { Cloud, Server, Database, GitBranch, RefreshCw, Lock } from "lucide-react";
import "./Services.css";

const Cloudservices = () => {
return (
    <Fragment>
      <section className="mb-5 why-choos" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Cloud Excellence</span>
              <h3 className="premium-heading">
                AWS Services
              </h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{CLOUDS_P1}</p>
              <p className="service-desc">{CLOUDS_P2}</p>
            </div>
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={aws_copy}
                alt="AWS Services"
                style={{ maxWidth: "480px", width: "100%", borderRadius: '30px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection
        serviceName="Cloud Services"
        features={[
          { icon: Cloud, title: "AWS & GCP Cloud Hosting" },
          { icon: Server, title: "Cloud Infrastructure Setup" },
          { icon: Database, title: "Database Management" },
          { icon: GitBranch, title: "CI/CD Pipeline Automation" },
          { icon: RefreshCw, title: "Auto-scaling & Load Balancing" },
          { icon: Lock, title: "Cloud Security & Compliance" },
        ]}
      />

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={gcp}
                alt="Google Cloud Services"
                style={{ maxWidth: "480px", width: "100%" }}
              />
            </div>
            <div className="col" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Scalable Infrastructure</span>
              <h3 className="premium-heading">
                GCP Services
              </h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{CLOUDS_P4}</p>
              <p className="service-desc">{CLOUDS_P5}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col" data-aos="fade-right">
              <span className="premium-badge d-inline-block">CI/CD Automation</span>
              <h3 className="premium-heading">
                Jenkins Services
              </h3>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{CLOUDS_P7}</p>
              <p className="service-desc">{CLOUDS_P8}</p>
            </div>
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={jenkins_new}
                alt="Jenkins Services"
                style={{ maxWidth: "480px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 mt-5 why-choos">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col text-center">
              <Image
                className="img-fluid rounded mx-auto d-block"
                src={kubernets}
                alt="Docker & Kubernetes"
                style={{ maxWidth: "480px", width: "100%" }}
              />
            </div>
            <div className="col" data-aos="fade-right">
              <span className="premium-badge d-inline-block">Orchestration</span>
              <h1 className="premium-heading">
                Docker & Kubernetes
              </h1>
              <div className="premium-divider mb-4"></div>
              <p className="service-desc">{CLOUDS_P10}</p>
              <p className="service-desc">{CLOUDS_P11}</p>
            </div>
          </div>
        </div>
      </section>
      <ServiceContactSection title="Cloud Development" />
      
    </Fragment>
  );
};

export default Cloudservices;
