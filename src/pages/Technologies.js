import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import html5Image from "../assets/images/html.webp";
import React from "../assets/images/React.webp";
import css from "../assets/images/css3.webp";
import js from "../assets/images/js.webp";
import nodejs from "../assets/images/nodejs.webp";
import expressjs from "../assets/images/express-js.webp";
import python from "../assets/images/python.webp";
import php from "../assets/images/php.webp";
import flutter from "../assets/images/flutter.webp";
import android from "../assets/images/android.webp";
import ios from "../assets/images/apple.webp";
import aws from "../assets/images/aws.webp";
import docker from "../assets/images/dockernew.webp";

const SectionTitle = dynamic(() => import("@/commonComponent/SectionTitle"));
const OurExpertiseBox = dynamic(
  () => import("@/PagesComponent/OurExpertise/OurExpertiseBox")
);

const expertiseData = [
  {
    category: "Frontend",
    subtechnologies: [
      { name: "React.js", image: React },
      { name: "HTML5", image: html5Image },
      { name: "CSS", image: css },
      { name: "JavaScript", image: js },
    ],
  },
  {
    category: "Backend",
    subtechnologies: [
      { name: "Node.js", image: nodejs },
      { name: "Express.js", image: expressjs },
      { name: "Python", image: python },
      { name: "Php", image: php },
    ],
  },
  {
    category: "Mobile Development",
    subtechnologies: [
      { name: "React Native", image: React },
      { name: "Flutter", image: flutter },
      { name: "Android", image: android },
      { name: "iOS", image: ios },
    ],
  },
  {
    category: "Cloud Computing",
    subtechnologies: [
      { name: "AWS", image: aws },
      { name: "Docker", image: docker },
    ],
  },
];

const TechnologiesPage = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [activeSubtechnologies, setActiveSubtechnologies] = useState(
    expertiseData[0].subtechnologies
  );

  const handleTabClick = (category) => {
    setActiveTab(category);
    const selectedCategory = expertiseData.find(
      (item) => item.category === category
    );
    setActiveSubtechnologies(selectedCategory.subtechnologies);
  };

  return (
    <>
      <Head>
        <title>Technologies & Expertise | KOLI Infotech</title>
        <meta
          name="description"
          content="Explore KOLI Infotech's technology stack — React, Node.js, Python, Flutter, AWS, Docker, and more for modern web and mobile solutions."
        />
      </Head>
      <section id="expertise" className="py-5">
        <div className="container">
          <SectionTitle
            title="Our Expertise"
            paragraph="We specialize in modern web technologies to build cutting-edge applications. Explore the core skills we excel at."
            center
            width="665px"
          />

          <div className="mb-4 d-flex flex-column justify-content-center flex-md-row">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {expertiseData.map((categoryData) => (
                <button
                  key={categoryData.category}
                  type="button"
                  className={`btn btn-outline-primary py-2 px-4 border-bottom-0 ${
                    activeTab === categoryData.category
                      ? "text-primary"
                      : "text-muted"
                  }`}
                  onClick={() => handleTabClick(categoryData.category)}
                >
                  {categoryData.category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {activeSubtechnologies.map((subtechnology) => (
              <div className="col-12 col-md-4 col-lg-3" key={subtechnology.name}>
                <OurExpertiseBox
                  image={subtechnology.image}
                  title={subtechnology.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesPage;
