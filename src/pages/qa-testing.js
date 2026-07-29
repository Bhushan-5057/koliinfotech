import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const QaTestingHeroSection = dynamic(
  () => import("@/PagesComponent/QATesting/HeroSection")
);
const QaAndTestingServices = dynamic(
  () => import("@/PagesComponent/QATesting/Services")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const QaTestingServices = () => {
  return (
    <Fragment>
      <Head>
        <title>QA & Testing Services | KOLI Infotech</title>
        <meta
          name="description"
          content="Functional, performance, and automated testing. Bug-free, reliable software with comprehensive QA from KOLI Infotech."
        />
      </Head>
      <QaTestingHeroSection />
      <ClientWeServe />
      <QaAndTestingServices />
      <ServicePageExtras serviceKey="qa-testing" />
    </Fragment>
  );
};

export default QaTestingServices;
