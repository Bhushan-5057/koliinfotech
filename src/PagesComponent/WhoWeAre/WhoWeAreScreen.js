import React, { Fragment, useEffect } from "react";
import Image1 from "../../assets/images/about1.webp";
import Image2 from "../../assets/images/about2.webp";
import Image3 from "../../assets/images/about3.webp";
import { ABOUT_KOLI_INFOTECH } from "@/commonComponent/commanText";
import OurServices from "../HomePage/OurServices";
import WhoWeAreFAQ from "@/commonComponent/WhoWeAreFAQ";
import TechHeroSection from "../WhoWeAre/TechHeroSection";
import ClientWeServe from "@/commonComponent/ClientWeServe";
import styles from "./WhoWeAreScreen.module.css";
import AbouthoverCard from "./AbouthoverCard";

const WhoWeAreScreen = () => {
  const aboutCards = [
    {
      image: Image1,
      title: "Who We Are",
      description:
        "KOLI Infotech builds practical digital products with clear planning, collaborative execution, and long-term delivery ownership.",
      imageAlt: "KOLI Infotech team collaborating in office",
    },
    {
      image: Image2,
      title: "What We Deliver",
      description:
        "From mobile apps and web platforms to QA and cloud support, we focus on reliable, scalable outcomes for every client.",
      imageAlt: "Digital product development and engineering process",
    },
    {
      image: Image3,
      title: "How We Work",
      description:
        "Our process combines design, engineering, and communication discipline so products launch faster with better quality.",
      imageAlt: "KOLI Infotech project planning and execution workflow",
    },
  ];

  useEffect(() => {
    const timerId = setTimeout(() => {
    }, 1500);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Fragment>
      <section className={styles.aboutSection}>
        <div className="container position-relative">
          <div
            className={`${styles.WhoWeAreAboutSectionInner} ${styles.aboutSectionMotion}`}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
          >
            <h1 className={styles.aboutSectionHeading}>
              About <span>KOLI</span> infotech
            </h1>
            <p className={styles.aboutSectionSubtext}>{ABOUT_KOLI_INFOTECH}</p>

            <div className={styles.valueStrip}>
              <span>Product-focused execution</span>
              <span>Transparent communication</span>
              <span>Reliable delivery ownership</span>
            </div>

            <div className={styles.aboutCardsGrid}>
              {aboutCards.map((card) => (
                <div className={styles.aboutCardItem} key={card.title}>
                  <AbouthoverCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    imageAlt={card.imageAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <ClientWeServe />
        <OurServices />
        <TechHeroSection />
        <WhoWeAreFAQ />
      </section>
    </Fragment>
  );
};

export default WhoWeAreScreen;




