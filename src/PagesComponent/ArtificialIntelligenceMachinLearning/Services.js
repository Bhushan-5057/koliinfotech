"use Client";
import React, { Fragment } from "react";
import {
  AIML_P1,
  AIML_P2,
  AIML_P3,
  AIML_P4,
  AIML_P5,
  AIML_P6,
} from "@/commonComponent/commanText";
import Image from "next/image";
import IOT_Development from "../../assets/images/integration_service.webp";
import AimlVisual from "../../assets/images/aiml.webp";
import ChatbotVisual from "../../assets/images/chatbot.svg";
import dynamic from "next/dynamic";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import "./Services.css";

const AIAgentsSection = dynamic(() => import("./AIAgentsSection"));
const AILifecycleSection = dynamic(() => import("./AILifecycleSection"));

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";

const AiMlServices = () => {
  return (
    <Fragment>
      <div className="aiml-services-page">
        {/* --- AI & ML Section --- */}
        <section className="service-block">
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-6">
                <div className="service-copy">
                  <span className="premium-badge">AI &amp; ML Services</span>
                  <h2 className="premium-heading">AI &amp; ML Development</h2>
                  <div className="premium-divider" />
                  <p className="service-desc">{AIML_P1}</p>
                  <p className="service-desc service-desc--last">{AIML_P2}</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="service-visual service-visual--wide service-visual--cover">
                  <div
                    className="service-visual__glow"
                    style={{
                      background: `radial-gradient(circle, ${ACCENT}2e 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />
                  <div className="service-visual__frame">
                    <div className="service-visual__media service-visual__media--flush">
                      <Image
                        className="service-visual__img"
                        src={AimlVisual}
                        alt="AI and Machine Learning Development"
                        fill
                        sizes="(max-width: 575px) 92vw, (max-width: 991px) 80vw, 46vw"
                        priority
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Chatbot Section --- */}
        <section className="service-block service-block--soft">
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div className="service-visual service-visual--wide service-visual--cover">
                  <div
                    className="service-visual__glow"
                    style={{
                      background:
                        "radial-gradient(circle, #60a5fa2e 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="service-visual__frame">
                    <div className="service-visual__media service-visual__media--flush">
                      <Image
                        className="service-visual__img"
                        src={ChatbotVisual}
                        alt="Chatbot Development"
                        fill
                        sizes="(max-width: 575px) 92vw, (max-width: 991px) 80vw, 46vw"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-1 order-lg-2">
                <div className="service-copy service-copy--end">
                  <span className="premium-badge">Intelligent Automation</span>
                  <h2 className="premium-heading text-gradient">
                    Chatbot Development
                  </h2>
                  <div className="premium-divider" />
                  <p className="service-desc">{AIML_P3}</p>
                  <p className="service-desc service-desc--last">{AIML_P4}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- IOT Section --- */}
        <section className="service-block">
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-6">
                <div className="service-copy">
                  <span className="premium-badge">
                    Internet of Things (IoT)
                  </span>
                  <h2 className="premium-heading">IOT Development</h2>
                  <div className="premium-divider" />
                  <p className="service-desc">{AIML_P5}</p>
                  <p className="service-desc service-desc--last">{AIML_P6}</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="service-visual service-visual--wide service-visual--cover">
                  <div
                    className="service-visual__glow"
                    style={{
                      background: `radial-gradient(circle, ${BRAND_BLUE}2e 0%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />
                  <div className="service-visual__frame">
                    <div className="service-visual__media service-visual__media--flush">
                      <Image
                        className="service-visual__img"
                        src={IOT_Development}
                        alt="IOT Development"
                        fill
                        sizes="(max-width: 575px) 92vw, (max-width: 991px) 80vw, 46vw"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIAgentsSection />
        <AILifecycleSection />
        <ServiceContactSection title="AI & ML Development" />
      </div>

      
    </Fragment>
  );
};

export default AiMlServices;
