import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const MobiAppDevHeroSection = dynamic(
  () => import("@/PagesComponent/MobiAppDevelopment/HeroSection")
);
const MobiAppDevScreen = dynamic(
  () => import("@/PagesComponent/MobiAppDevelopment/MobiAppDevScreen")
);
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const MobiAppDevelopment = () => {
  return (
    <Fragment>
      <Head>
        <title>Mobile App Development Company | KOLI Infotech</title>
        <meta
          name="description"
          content="Android & iOS app development with React Native and Flutter. User-friendly, scalable mobile apps from KOLI Infotech, Surat."
        />
      </Head>
      <MobiAppDevHeroSection />
      <MobiAppDevScreen />
      <ServicePageExtras serviceKey="mobile-app-development" />
    </Fragment>
  );
};

export default MobiAppDevelopment;
