import React, { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const AiMlHeroSection = dynamic(
  () => import("@/PagesComponent/ArtificialIntelligenceMachinLearning/HeroSection")
);
const AiMlServices = dynamic(
  () => import("@/PagesComponent/ArtificialIntelligenceMachinLearning/Services")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const AimlServices = () => {
  return (
    <Fragment>
      <Head>
        <title>AI & Machine Learning Solutions | KOLI Infotech</title>
        <meta
          name="description"
          content="AI chatbots, ML models, NLP & predictive analytics. Scalable AI solutions to automate, predict and transform your business."
        />
      </Head>
      <AiMlHeroSection />
      <ClientWeServe />
      <AiMlServices />
      <ServicePageExtras serviceKey="artificial-intelligence-machine-learning" />
    </Fragment>
  );
};

export default AimlServices;
