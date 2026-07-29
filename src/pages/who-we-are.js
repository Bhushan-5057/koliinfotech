import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const WhoWeAreHeroSection = dynamic(
  () => import("@/PagesComponent/WhoWeAre/HeroSection")
);
const WhoWeAreScreen = dynamic(
  () => import("@/PagesComponent/WhoWeAre/WhoWeAreScreen")
);
const ConsultationCTA = dynamic(() => import("@/commonComponent/ConsultationCTA"));
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const WhoWeAre = () => {
  return (
    <Fragment>
      <Head>
        <title>Who We Are | KOLI Infotech</title>
        <meta
          name="description"
          content="Meet KOLI Infotech — a global team of 100+ experts delivering software, web, and mobile solutions for startups through enterprise."
        />
      </Head>
      <WhoWeAreHeroSection />
      <WhoWeAreScreen />
      <ConsultationCTA />
      <FinalCTA />
    </Fragment>
  );
};

export default WhoWeAre;
