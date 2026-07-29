import React, { useState } from "react";
import FAQ from "./FAQ";
import "./FaqAccordian.css";

const FaqAccordianCloud = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is DevOps, and how can it benefit my organization??",
      answer:
        "DevOps is a software development methodology that emphasizes collaboration, communication, and automation between development and operations teams to deliver software faster and with greater quality. Benefits include faster time-to-market, increased productivity, improved customer satisfaction, and better business agility.",
      open: false,
    },
    {
      question: "How do you ensure security and compliance in DevOps?",
      answer:
        "Security and compliance are integrated into the DevOps process through automation, continuous monitoring, and regular audits. Security best practices such as access control, vulnerability scanning, and encryption are implemented throughout the development pipeline to ensure that code is secure and compliant with industry standards.",
      open: false,
    },
    {
      question: "How do you manage infrastructure in DevOps?",
      answer:
        "Infrastructure is managed through IaC, which enables infrastructure provisioning and management through code. Infrastructure is defined as code, versioned, and managed in a source control system. This allows for consistent, repeatable, and auditable infrastructure management.",
      open: false,
    },
    {
      question: "How do you handle testing in DevOps?",
      answer:
        "Testing is integrated into the DevOps process through continuous testing, which involves automated testing throughout the development pipeline. Tests are run as part of the CI/CD process, and developers receive immediate feedback on code changes. Automated testing includes unit, integration, functional, and performance testing.",
      open: false,
    },
    {
      question: "How do you ensure scalability in DevOps?",
      answer:
        "Scalability is addressed through infrastructure as code and automation. Infrastructure can be scaled up or down based on demand, and auto-scaling can be implemented to automatically adjust resources based on usage. Load testing is also used to ensure that systems can handle increased traffic and load.",
      open: false,
    },
    {
      question: "How do you handle incident management in DevOps?",
      answer:
        "Incident management is addressed through automation, monitoring, and collaboration between development and operations teams. DevOps teams use monitoring and alerting tools to detect and respond to incidents quickly. Incident response processes are defined and documented and post-incident reviews are conducted to identify opportunities for improvement.",
      open: false,
    },
    {
      question: "Is devops and cloud computing same?",
      answer:
        "No, DevOps and cloud computing are related but distinct concepts. DevOps is a methodology that emphasizes collaboration and automation between development and operations teams, while cloud computing refers to the delivery of computing resources over the internet. While DevOps can be applied to any software development environment, cloud computing provides the infrastructure and services that support the implementation of DevOps practices.",
      open: false,
    },
    {
      question: "Which cloud technology best for DevOps.",
      answer:
        "There isn’t a single “best” cloud technology for DevOps, as the choice depends on specific requirements and preferences. However, some popular cloud technologies commonly used in DevOps include Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). These cloud providers offer a wide range of services and tools that align with DevOps principles, such as infrastructure as code, continuous integration and deployment, automated scaling, and monitoring. Ultimately, the best cloud technology for DevOps would be the one that suits the organization’s needs, provides the required features and integrations, and aligns with its existing infrastructure and expertise.",
      open: false,
    },
    {
      question: "Can kubernetes work without docker?",
      answer:
        "Yes, Kubernetes can work without Docker. While Docker is a popular containerization platform that is often used with Kubernetes, Kubernetes is designed to be container-runtime agnostic. This means that it can work with other container runtimes such as containers, CRI-O, or even with virtual machines.",
      open: false,
    },
    {
      question: "What is docker and Kubernetes used in DevOps?",
      answer:
        "Docker and Kubernetes are popular tools used in DevOps practices to enhance the efficiency and reliability of application deployment and management. Docker helps developers build and package applications with their dependencies into containers, ensuring consistency between development, testing, and production environments. Kubernetes, on the other hand, manages the orchestration and scaling of these containers, allowing for efficient resource utilization and easy application",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faq-container-premium">
      <h2 className="faq-section-title" data-aos="fade-up">Frequently Asked Questions</h2>
      <div className="faq-divider" data-aos="fade-up" data-aos-delay="100"></div>

      <div className="faqs-list" data-aos="fade-up" data-aos-delay="200">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default FaqAccordianCloud;
