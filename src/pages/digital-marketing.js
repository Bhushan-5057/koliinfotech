import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const DigitalMarketingHero = dynamic(
  () => import("@/PagesComponent/DigitalMarketing/HeroSection")
);
const DigitalMarketingScreen = dynamic(
  () => import("@/PagesComponent/DigitalMarketing/DigitalMarketingScreen")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const DigitalMarketing = () => {
  return (
    <Fragment>
      <Head>
        <title>SEO & Digital Marketing Services | KOLI Infotech</title>
        <meta
          name="description"
          content="Grow your business with SEO, Google Ads, social media marketing, and conversion optimization. Data-driven digital marketing from KOLI Infotech, Surat."
        />
      </Head>
      <DigitalMarketingHero />
      <ClientWeServe />
      <DigitalMarketingScreen />
      <ServicePageExtras serviceKey="digital-marketing" faqTitle="Marketing FAQ" />
    </Fragment>
  );
};

export default DigitalMarketing;
