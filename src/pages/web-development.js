import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const WebDevHeroSection = dynamic(
  () => import("@/PagesComponent/WebDevelopment/HeroSection")
);
const WebDevScreen = dynamic(
  () => import("@/PagesComponent/WebDevelopment/WebDevScreen")
);
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const WebDevelopment = () => {
  return (
    <Fragment>
      <Head>
        <title>Web Development Company in Surat | KOLI Infotech</title>
        <meta
          name="description"
          content="Custom web apps, e-commerce, CMS & portals for healthcare, finance, e-learning & real estate. Expert web development from KOLI Infotech."
        />
      </Head>
      <WebDevHeroSection />
      <WebDevScreen />
      <ServicePageExtras serviceKey="web-development" />
    </Fragment>
  );
};

export default WebDevelopment;
