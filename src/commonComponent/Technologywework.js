import React, { useMemo, useState, memo } from "react";
import Image from "next/image";
import CssMarquee from "@/commonComponent/CssMarquee";
import technologiesData from "@/data/technologies.json";

import reactImg from "@/assets/images/react.svg";
import reactNativeImg from "@/assets/images/react.svg";
import angularImg from "@/assets/images/angularjs.webp";
import vueImg from "@/assets/images/vuejs.webp";
import nextImg from "@/assets/images/nextjs.webp";
import javascriptImg from "@/assets/images/javascript.webp";
import htmlImg from "@/assets/images/html.webp";
import cssImg from "@/assets/images/css3.webp";
import typescriptImg from "@/assets/images/typescript.svg";
import nodeImg from "@/assets/images/nodejs.webp";
import expressImg from "@/assets/images/express-js.webp";
import pythonImg from "@/assets/images/python.webp";
import laravelImg from "@/assets/images/laravel.webp";
import javaImg from "@/assets/images/java.webp";
import phpImg from "@/assets/images/php.webp";
import flutterImg from "@/assets/images/flutter.webp";
import androidImg from "@/assets/images/android.webp";
import iosImg from "@/assets/images/apple.webp";
import mongoImg from "@/assets/images/mongodb.webp";
import postgresImg from "@/assets/images/postgreashsql.webp";
import mysqlImg from "@/assets/images/mysql.webp";
import firebaseImg from "@/assets/images/firebase.webp";
import awsImg from "@/assets/images/aws.webp";
import dockerImg from "@/assets/images/docker.svg";
import kubernetesImg from "@/assets/images/kubernets.webp";
import asanaImg from "@/assets/images/asana.webp";
import jiraImg from "@/assets/images/jira.webp";
import trelloImg from "@/assets/images/trello.webp";
import clickupImg from "@/assets/images/clickup.webp";
import teamsImg from "@/assets/images/microsoftteam.webp";
import slackImg from "@/assets/images/slack.webp";
import googleMeetImg from "@/assets/images/google-meet.svg";
import zoomImg from "@/assets/images/Zoom.webp";

const techImageMap = {
  "react.svg": reactImg,
  "react.svg": reactNativeImg,
  "angularjs.webp": angularImg,
  "vuejs.webp": vueImg,
  "nextjs.webp": nextImg,
  "javascript.webp": javascriptImg,
  "html.webp": htmlImg,
  "css3.webp": cssImg,
  "typescript.svg": typescriptImg,
  "nodejs.webp": nodeImg,
  "express-js.webp": expressImg,
  "python.webp": pythonImg,
  "laravel.webp": laravelImg,
  "java.webp": javaImg,
  "php.webp": phpImg,
  "flutter.webp": flutterImg,
  "android.webp": androidImg,
  "apple.webp": iosImg,
  "mongodb.webp": mongoImg,
  "postgreashsql.webp": postgresImg,
  "mysql.webp": mysqlImg,
  "firebase.webp": firebaseImg,
  "aws.webp": awsImg,
  "docker.svg": dockerImg,
  "kubernets.webp": kubernetesImg,
  "asana.webp": asanaImg,
  "jira.webp": jiraImg,
  "trello.webp": trelloImg,
  "clickup.webp": clickupImg,
  "microsoftteam.webp": teamsImg,
  "slack.webp": slackImg,
  "google-meet.svg": googleMeetImg,
  "Zoom.webp": zoomImg,
};

/** Marquee only when there are enough unique items to avoid a visible clone set. */
const MARQUEE_MIN_ITEMS = 10;

const resolveTechImage = (image) => {
  if (!image) return null;
  if (typeof image !== "string") return image;
  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("/")
  ) {
    return image;
  }
  return techImageMap[image] || null;
};

const getImageSrc = (image) => {
  if (!image) return null;
  if (typeof image === "string") return image;
  return image.src || null;
};

const isSvgImage = (image) => {
  const src = getImageSrc(image);
  return typeof src === "string" && src.toLowerCase().includes(".svg");
};

const flattenTechnologies = (grouped) =>
  (grouped || []).flatMap((group) =>
    (group.technologies || []).map((tech) => ({
      id: tech.id,
      typeOfTechs: group.category,
      technologyName: tech.title,
      image: resolveTechImage(tech.image),
    }))
  );

const TechCard = ({ tech }) => {
  const svg = isSvgImage(tech.image);
  const src = getImageSrc(tech.image);

  return (
    <div className="tech-slide-card">
      <div
        className="tech-image-wrapper"
        title={tech.technologyName || undefined}
      >
        {src &&
          (svg ? (
            // next/image optimizes SVG poorly without dangerouslyAllowSVG
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={tech.technologyName || "tech"}
              className="tech-svg-image"
            />
          ) : (
            <Image
              src={tech.image}
              alt={tech.technologyName || "tech"}
              fill
              sizes="160px"
              loading="lazy"
              className="object-contain"
            />
          ))}
      </div>
      <p className="tech-name">{tech.technologyName || "N/A"}</p>
    </div>
  );
};

const Technologywework = () => {
  const allTechnologies = useMemo(
    () => flattenTechnologies(technologiesData),
    []
  );
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = useMemo(() => {
    if (!allTechnologies || allTechnologies.length === 0) {
      return ["ALL"];
    }
    const types = allTechnologies
      .map((tech) => tech.typeOfTechs)
      .filter((type) => type && typeof type === "string");

    const uniqueTypes = Array.from(new Set(types)).sort();

    if (uniqueTypes.includes("ALL")) {
      const filtered = uniqueTypes.filter((t) => t !== "ALL");
      return ["ALL", ...filtered];
    }
    return ["ALL", ...uniqueTypes];
  }, [allTechnologies]);

  const techList = useMemo(
    () =>
      activeCategory === "ALL"
        ? allTechnologies
        : allTechnologies.filter((tech) => tech.typeOfTechs === activeCategory),
    [activeCategory, allTechnologies]
  );

  const useMarquee = techList.length >= MARQUEE_MIN_ITEMS;
  const marqueeDuration = Math.max(techList.length * 3, 28);

  return (
    <div className="container mx-auto px-4 max-w-7xl relative z-10 tech-wrapper pt-6 md:pt-16">
      <div className="text-center mb-8 lg:mb-20 section-fade-down">
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase mb-6">
          Technologies We <span className="text-[#3f689f]">Work With</span>
        </h2>
        <p className="section-eyebrow font-bold uppercase tracking-[0.2em] text-xs md:text-sm italic">
          Powering Innovation with Modern Tech Stack
        </p>
      </div>

      <p className="text-center mb-12 text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
        We have worked with <strong>150+ clients</strong> over
        <strong> 10+ years</strong>, delivering scalable, high-performance
        solutions across various industries and domains.
      </p>

      {categories.length > 0 && (
        <div className="tech-category-container mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`tech-category-btn touch-target ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "ALL" ? "All" : cat}
            </button>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-center px-2">
        <div key={activeCategory} className="w-full pb-4 tech-category-panel">
          {techList.length === 0 && (
            <div className="text-center py-6 text-gray-500 font-medium italic">
              No technologies available in this category.
            </div>
          )}

          {techList.length > 0 && useMarquee && (
            <CssMarquee
              duration={marqueeDuration}
              pauseOnHover={true}
              gap={16}
              itemClassName="tech-marquee-item"
            >
              {techList.map((tech, index) => (
                <TechCard
                  key={`${tech.id || index}-${tech.technologyName}`}
                  tech={tech}
                />
              ))}
            </CssMarquee>
          )}

          {techList.length > 0 && !useMarquee && (
            <div className="tech-static-grid">
              {techList.map((tech, index) => (
                <div
                  key={`${tech.id || index}-${tech.technologyName}`}
                  className="tech-marquee-item"
                >
                  <TechCard tech={tech} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Technologywework);
