import React, { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import MissionImage from "../assets/images/Mission.webp";
import VisionImage from "../assets/images/Vision.webp";
import GoalImage from "../assets/images/Goal.webp";
import FounderImage from "../assets/images/ajay-koli.webp";
import Image from "next/image";
import { OUR_GOAL, OUR_MISSION_TEXT, OUR_VISION_TEXT } from "../commonComponent/commanText";
import Head from "next/head";
import "./about-company-founder.css";

const ServiceHeroBackground = dynamic(
  () => import("@/commonComponent/ServiceHeroBackground")
);
const Accomplishments = dynamic(
  () => import("@/PagesComponent/Accomplishment/Accomplishments")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ConsultationCTA = dynamic(() => import("@/commonComponent/ConsultationCTA"));
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const BRAND_BLUE = "#3f689f";
const SKY = "#60a5fa";

const GrowthIcon = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const UsersIcon = () => (
  <GrowthIcon>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </GrowthIcon>
);

const TargetIcon = () => (
  <GrowthIcon>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </GrowthIcon>
);

const LineChartIcon = () => (
  <GrowthIcon>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </GrowthIcon>
);

const FOUNDER_VALUES = [
  {
    title: "Customer Commitment",
    text: "Every engagement starts with clarity, honesty, and outcomes that matter to the client.",
  },
  {
    title: "Innovation Mindset",
    text: "We adopt modern technology thoughtfully — solving real problems, not chasing trends.",
  },
  {
    title: "Craft & Accountability",
    text: "Quality delivery, transparent communication, and ownership from discovery to launch.",
  },
  {
    title: "Long-term Partnership",
    text: "We build systems and relationships designed to grow with our clients’ businesses.",
  },
];

const FOUNDER_TIMELINE = [
  {
    year: "2014+",
    label: "Engineering Foundations",
    text: "Hands-on product and software delivery across web, mobile, and enterprise systems.",
  },
  {
    year: "Growth",
    label: "Building KOLI Infotech",
    text: "Scaled a delivery culture focused on trust, craftsmanship, and measurable business impact.",
  },
  {
    year: "Today",
    label: "AI-Ready Product Partner",
    text: "Helping companies modernize platforms and ship AI-enabled products with confidence.",
  },
  {
    year: "Next",
    label: "Future Goals",
    text: "Expand high-impact digital products globally while staying rooted in quality and client success.",
  },
];

const AboutCompany = () => {
  const [activeMvg, setActiveMvg] = useState("mission");

  const data = [
    {
      SrNo: 1,
      description:
        "A team with years of development, design and marketing experience who understand the complexity and needs of your business.",
    },
    {
      SrNo: 2,
      description:
        "Our focus is on working closely with customers like you to fully comprehend your needs and build a solution tailormade for you. Moreover, we have integrated modern technologies to ensure you get best results for your business.",
    },
    {
      SrNo: 3,
      description:
        "We use cutting edge technology, flexibility and scalabilty to help meet your business needs, optimizing delivery time and minimizing cost.",
    },
    {
      SrNo: 4,
      description:
        "We have solved real life business problems just like yours and have therefore the ability to put ourselves in your shoes! We believe that our clients and our teammates are all partners in our successes.",
    },
  ];

  const missionVisionGoal = {
    mission: {
      key: "mission",
      label: "Mission",
      heading: "Our Company Mission",
      description: OUR_MISSION_TEXT,
      image: MissionImage,
      alt: "Team values and mission",
    },
    vision: {
      key: "vision",
      label: "Vision",
      heading: "Our Company Vision",
      description: OUR_VISION_TEXT,
      image: VisionImage,
      alt: "Innovation and future vision",
    },
    goal: {
      key: "goal",
      label: "Goal",
      heading: "Our Company Goals",
      description: OUR_GOAL,
      image: GoalImage,
      alt: "Achievement and growth goals",
    },
  };

  const activeMvgData = missionVisionGoal[activeMvg];

  const growthHighlights = [
    {
      icon: <UsersIcon />,
      title: "Professional Team",
      description:
        "Dedicated experts in design, engineering, and product strategy focused on quality delivery.",
    },
    {
      icon: <TargetIcon />,
      title: "Target Oriented",
      description:
        "Every solution is aligned with your goals, timelines, and measurable business outcomes.",
    },
    {
      icon: <LineChartIcon />,
      title: "Success Guarantee",
      description:
        "Scalable, future-ready execution that helps your business grow faster with lower risk.",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>KOLI Infotech | Remarkable Software Development & Solutions!</title>
        <meta
          name="description"
          content="Experience our remarkable development expertise, designed to delight clients. We create stunning designs and reliable services that exceed expectations!"
        />
      </Head>
      <ServiceHeroBackground>
        <section
          className="d-flex align-items-center"
          style={{
            flexGrow: 1,
            width: "100%",
            paddingTop: "clamp(100px, 14vh, 140px)",
            paddingBottom: "clamp(70px, 10vh, 100px)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8 text-center" data-aos="fade-down">
                <div className="d-inline-flex align-items-center gap-2 mb-4 bg-white px-3 py-1 rounded-pill shadow-sm">
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: SKY,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: "800",
                      color: BRAND_BLUE,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    About Company
                  </span>
                </div>

                <h1
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: "1.25",
                    color: BRAND_BLUE,
                    fontWeight: "850",
                    letterSpacing: "-0.02em",
                  }}
                >
                  KOLI Infotech - Shaping <br />
                  the Future of IT Services
                </h1>

                <div
                  className="mx-auto"
                  style={{
                    width: "45px",
                    height: "3px",
                    background: `linear-gradient(90deg, ${BRAND_BLUE}, ${SKY})`,
                    marginBottom: "2rem",
                    borderRadius: "4px",
                  }}
                />

                <p
                  className="mx-auto"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.7",
                    color: "#555",
                    maxWidth: "700px",
                    margin: 0,
                    fontWeight: "500",
                  }}
                >
                  We craft dependable, scalable digital products that move businesses forward.
                  Partner with a team that blends strategy, design, and engineering to deliver
                  real-world impact across every stage of growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ServiceHeroBackground>

      <section className="founder-section" aria-labelledby="founder-heading">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-media">
              <div className="founder-media-accent" aria-hidden="true" />
              <div className="founder-image-wrap">
                <Image
                  src={FounderImage}
                  alt="Ajay Koli, Founder and CEO of KOLI Infotech"
                  width={560}
                  height={680}
                  sizes="(max-width: 991px) 80vw, 420px"
                  className="founder-image"
                  priority={false}
                />
              </div>
              <div className="founder-experience-badge">
                <strong>12+</strong>
                <span>Years Experience</span>
              </div>
            </div>

            <div className="founder-content">
              <p className="founder-eyebrow">Leadership</p>
              <h2 id="founder-heading">Ajay Koli</h2>
              <p className="founder-role">Founder &amp; CEO</p>
              <p className="founder-intro">
                Ajay leads KOLI Infotech with a builder’s mindset and a partner’s heart —
                helping businesses turn ambitious ideas into reliable, scalable software. His
                focus is simple: clarity in strategy, excellence in engineering, and outcomes
                that create lasting trust.
              </p>

              <blockquote className="founder-quote">
                <p>
                  “Technology should reduce complexity for customers — not add it. Great
                  software earns trust through clarity, reliability, and care.”
                </p>
              </blockquote>

              <div className="founder-counters">
                <div>
                  <strong>12+</strong>
                  <span>Years Leading Delivery</span>
                </div>
                <div>
                  <strong>160+</strong>
                  <span>Projects Guided</span>
                </div>
                <div>
                  <strong>150+</strong>
                  <span>Clients Served</span>
                </div>
              </div>
            </div>
          </div>

          <div className="founder-panels">
            <article>
              <h3>Vision Statement</h3>
              <p>
                To make world-class digital product engineering accessible to growing
                businesses — pairing modern technology with practical execution and long-term
                partnership.
              </p>
            </article>
            <article>
              <h3>Leadership Philosophy</h3>
              <p>
                Lead by example, listen deeply, and keep teams accountable to quality. Strong
                products come from clear ownership, honest communication, and disciplined
                delivery.
              </p>
            </article>
            <article>
              <h3>Company Mission</h3>
              <p>
                Help organizations design, build, and scale software that improves operations,
                strengthens customer experience, and creates measurable business value.
              </p>
            </article>
            <article>
              <h3>Customer Commitment</h3>
              <p>
                Every engagement is treated as a shared success story — transparent timelines,
                thoughtful recommendations, and support beyond launch.
              </p>
            </article>
          </div>

          <div className="founder-values">
            <h3>Core Values</h3>
            <div className="founder-values-grid">
              {FOUNDER_VALUES.map((item) => (
                <div key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="founder-timeline">
            <h3>Journey &amp; Future Goals</h3>
            <ol>
              {FOUNDER_TIMELINE.map((item) => (
                <li key={item.label}>
                  <span className="founder-timeline-year">{item.year}</span>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="founder-signature">— Ajay Koli</p>
          </div>
        </div>
      </section>

      <ClientWeServe />
      <section className="about-mvg mt-8">
        <div className="container" data-aos="fade-up">
          <h1 className="about-mvg-title text-center" style={{ textTransform: "uppercase" }}>
            Our Main Goal to Satisfied{" "}
            <span className="text-cursive text-blue-800">local & Global Clients</span>
          </h1>
          <div className="about-mvg-grid">
            <div className="about-mvg-col">
              <div className="about-mvg-buttons">
                {Object.values(missionVisionGoal).map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActiveMvg(item.key)}
                    className={`about-mvg-btn ${activeMvg === item.key ? "active" : ""}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="about-mvg-content">
                <h2 className="about-mvg-heading" style={{ textTransform: "uppercase" }}>
                  {activeMvgData.heading}
                </h2>
                <p className="about-mvg-text">{activeMvgData.description}</p>
              </div>
            </div>
            <div className="about-mvg-media">
              <div className="about-mvg-image-wrap">
                <Image
                  src={activeMvgData.image}
                  alt={activeMvgData.alt}
                  className="img-fluid about-mvg-image"
                  width={640}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-growth-section">
        <div className="container about-growth-container" data-aos="fade-up">
          <h2 className="about-growth-title" style={{ textTransform: "uppercase" }}>
            We help businesses grow
            <span>faster and bigger</span>
          </h2>
          <p className="about-growth-text">
            KOLI Infotech combines deep technical expertise with practical business thinking to
            deliver digital solutions that perform, scale, and create lasting value.
          </p>

          <div className="about-growth-grid">
            {growthHighlights.map((item, index) => (
              <article key={index} className="about-growth-card">
                <div className="about-growth-icon-wrap" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="qualities-we-take-section">
        <div className="container" data-aos="fade-down">
          <h2 className="qualities-title" style={{ textTransform: "uppercase" }}>
            <span className="text-[#2c73df]">Qualities</span> we take pride in
          </h2>
          <div className="qualities-divider" />

          <ol className="qualities-list">
            {data.map((item, index) => (
              <li className="quality-item" key={index}>
                <span className="quality-number">{item.SrNo}</span>
                <div className="quality-content">
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Accomplishments />
      <ConsultationCTA />
      <FinalCTA />
    </Fragment>
  );
};

export default AboutCompany;
