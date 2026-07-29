import React, { Fragment, useEffect } from "react";
import ServiceWhyChooseSection from "@/commonComponent/ServiceWhyChooseSection";
import ServiceContactSection from "@/commonComponent/ServiceContactSection";
import "./DataSecureScreen.css";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Key, 
  AlertTriangle, 
  CheckCircle,
  FileText,
} from "lucide-react";

const BRAND_BLUE = "#3f689f";
const DARK = "#1e293b";

const DataSecureScreen = () => {
return (
    <Fragment>
      {/* ─── Data Privacy Section ─── */}
      <section className="ds-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <span className="premium-badge d-inline-block">Trust & Integrity</span>
            <h2 className="premium-heading">Data <span className="ds-accent">Privacy</span></h2>
            <div className="premium-divider mx-auto mb-4" />
          </div>
          
          <div className="ds-dashed-wrapper" data-aos="fade-up">
            <div className="ds-dashed-spec">
              <p className="service-desc">
                At KOLI Infotech, we prioritize the sanctity of your data above all else. Our data privacy framework is built on the principles of transparency, security, and absolute confidentiality. We implement rigorous protocols to ensure that every byte of information shared with us is handled with the highest level of professional care and technical safeguards.
              </p>
              <p className="service-desc mb-0">
                We fully comply with global data protection standards, including GDPR and CCPA, ensuring that your users' information remains private and secure. Our commitment extends beyond mere compliance; we proactively architect our systems to minimize data exposure and prevent unauthorized access through advanced encryption and siloed storage architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection
        serviceName="Data Security"
        features={[
          { icon: ShieldCheck, title: "End-to-End Data Encryption" },
          { icon: Lock, title: "Advanced Access Control" },
          { icon: Eye, title: "Real-time Threat Monitoring" },
          { icon: Key, title: "Secure Authentication" },
          { icon: AlertTriangle, title: "Proactive Vulnerability Management" },
          { icon: CheckCircle, title: "Compliance & Audit Readiness" },
        ]}
      />

      {/* ─── NDA Overview Section ─── */}
      <section className="ds-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <span className="premium-badge d-inline-block">Legal Protection</span>
            <h2 className="premium-heading">Overview Of Our <span className="ds-accent">NDA</span></h2>
            <div className="premium-divider mx-auto mb-4" />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up">
              <div className="ds-info-card text-center">
                <p className="service-desc px-lg-5 mx-auto">
                  We believe that a strong legal foundation is essential for a successful partnership. Every collaboration starts with a comprehensive Non-Disclosure Agreement (NDA) that protects your intellectual property, trade secrets, and business logic from day one.
                </p>
                <div className="mt-5">
                  <h5 className="ds-sub-heading justify-content-center mb-4">
                    <FileText className="me-2" size={20} color={BRAND_BLUE} /> Key Clauses of our NDA
                  </h5>
                  <div className="ds-list-grid">
                    <ul className="ds-list text-start">
                      <li><strong>Bilateral Confidentiality:</strong> Mutual protection for all shared business information.</li>
                      <li><strong>Project Scope Protection:</strong> Specific safeguarding of project-related concepts and codebases.</li>
                      <li><strong>Exclusion of Public Domain:</strong> Clear definition of what constitutes protected information.</li>
                    </ul>
                    <ul className="ds-list text-start">
                      <li><strong>Enforceable Legal Remedy:</strong> Defined protocols for dispute resolution and protection.</li>
                      <li><strong>Duration of Secrecy:</strong> Long-term commitment to privacy even after project completion.</li>
                      <li><strong>Source Code Ownership:</strong> Immediate transfer of IP rights upon milestone delivery.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── App Idea Safe ─── */}
      <section className="ds-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <span className="premium-badge d-inline-block">IP Protection</span>
            <h2 className="premium-heading">How We Keep Your <span className="ds-accent">App Idea Safe</span></h2>
            <div className="premium-divider mx-auto mb-4" />
          </div>

          <div className="ds-minimal-wrap" data-aos="fade-up">
            <p className="service-desc mb-5 text-center px-lg-5 mx-auto">
              Your innovation is your most valuable asset. We protect it through a "Zero-Trust" development environment where access is strictly controlled and every action is logged. From private Git repositories to isolated development servers, we ensure your codebase never touches public environments.
            </p>
            <div className="row g-4">
              {[
                { title: "Employee NDAs", desc: "Every member of our team is bound by strict individual confidentiality agreements." },
                { title: "Private Infrastructure", desc: "No shared hosting; your data resides on isolated, firewalled cloud environments." },
                { title: "Code Ownership", desc: "100% IP rights and source code ownership are transferred to you upon delivery." }
              ].map((item, i) => (
                <div className="col-md-4" key={i}>
                  <div className="ds-feature-minimal">
                    <div className="ds-minimal-tag">Control 0{i+1}</div>
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Security Measures ─── */}
      <section className="ds-section bg-light-alt">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-down">
            <span className="premium-badge d-inline-block">Defense in Depth</span>
            <h2 className="premium-heading">Security Measures to <span className="ds-accent">Prevent Data Breach</span></h2>
            <div className="premium-divider mx-auto mb-4" />
          </div>

          <div className="ds-protocol-header mb-5" data-aos="fade-up">
            <p className="service-desc text-center mb-0 mx-auto">
              We employ a multi-layered security strategy that combines technical controls, administrative policies, and physical security to mitigate risks and prevent potential data breaches.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="ds-protocol-card">
                <div className="ds-protocol-label">Internal Controls</div>
                <h4 className="ds-protocol-title">General Security</h4>
                <ul className="ds-protocol-list">
                  <li>24/7 Security Operations Center (SOC) monitoring</li>
                  <li>Mandatory Multi-Factor Authentication (MFA)</li>
                  <li>Regular third-party vulnerability assessments</li>
                  <li>Automated security patch management</li>
                  <li>Strict data encryption at rest and in transit</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ds-protocol-card">
                <div className="ds-protocol-label">Perimeter Defense</div>
                <h4 className="ds-protocol-title">Network Security</h4>
                <ul className="ds-protocol-list">
                  <li>Enterprise-grade firewalls with IPS/IDS layers</li>
                  <li>Dedicated VPC environments for client projects</li>
                  <li>Encrypted VPN tunnels for developer access</li>
                  <li>Regular DDoS mitigation strategy reviews</li>
                  <li>Network-level isolation and micro-segmentation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4" data-aos="fade-up">
            <div className="ds-protocol-card full-width">
              <div className="ds-protocol-label">Governance & Risk</div>
              <h4 className="ds-protocol-title">Operational Security</h4>
              <div className="row g-4 align-items-center mt-2">
                <div className="col-md-5">
                  <p className="service-desc">
                    Operational security focus on the internal processes, policies, and human factors that keep your data safe. We train our staff regularly to recognize phishing and social engineering threats.
                  </p>
                </div>
                <div className="col-md-7">
                  <ul className="ds-protocol-list grid-cols">
                    <li>Strict Level-based access (RBAC)</li>
                    <li>Secure data disposal procedures</li>
                    <li>Incident response team (IRT)</li>
                    <li>Regular security awareness training</li>
                    <li>Audit logs for all system activities</li>
                    <li>Continuous process improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceContactSection title="Data Security" />

      {/* ─── SCOPED STYLES ─── */}
      
    </Fragment>
  );
};

export default DataSecureScreen;
