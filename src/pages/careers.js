import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const CareerPageHeroSection = dynamic(
  () => import("@/PagesComponent/CareerPage/HeroSection")
);
const CareerBenefitsSection = dynamic(
  () => import("@/PagesComponent/CareerPage/CareerBenefitsSection")
);
const CareerScreen = dynamic(
  () => import("@/PagesComponent/CareerPage/CareerScreen")
);
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const CareerPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Careers – Join KOLI Infotech | IT Jobs in Surat</title>
        <meta
          name="description"
          content="Join KOLI Infotech's team of 100+ experts. Explore developer, designer, and QA openings in Surat with growth, flexibility, and competitive rewards."
        />
      </Head>
      <CareerPageHeroSection />
      <CareerBenefitsSection />
      <CareerScreen />
      <FinalCTA />
    </Fragment>
  );
};

export default CareerPage;
