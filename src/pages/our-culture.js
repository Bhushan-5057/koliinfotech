import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const OurCultureHeroSection = dynamic(
  () => import("@/PagesComponent/OurCulturePage/OurCultureHeroSection")
);
const MissionSection = dynamic(
  () => import("@/PagesComponent/OurCulturePage/MissionSection")
);
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const OurCulture = () => {
  return (
    <Fragment>
      <Head>
        <title>Our Culture – KOLI Infotech | Life at KOLI</title>
        <meta
          name="description"
          content="Discover KOLI Infotech's vibrant culture — collaboration, innovation, team celebrations, and a people-first workplace in Surat."
        />
      </Head>
      <OurCultureHeroSection />
      <MissionSection />
      <FinalCTA />
    </Fragment>
  );
};

export default OurCulture;
