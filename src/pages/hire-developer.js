import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const HireDevHeroSection = dynamic(
  () => import("@/PagesComponent/HireDeveloper/HeroSection")
);
const HireDevScreen = dynamic(
  () => import("@/PagesComponent/HireDeveloper/HireDevScreen")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const HireDeveloper = () => {
  return (
    <Fragment>
      <Head>
        <title>Hire Dedicated Developers | KOLI Infotech</title>
        <meta
          name="description"
          content="Hire vetted React, Node.js, Python, and mobile developers on flexible models. Scale your team in 48–72 hours."
        />
      </Head>
      <HireDevHeroSection />
      <ClientWeServe />
      <HireDevScreen />
      <ServicePageExtras serviceKey="hire-developer" />
    </Fragment>
  );
};

export default HireDeveloper;
