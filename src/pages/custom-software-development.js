import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const CoustomSoftwareDServices = dynamic(
  () => import("@/PagesComponent/CoustomSoftwareDevelopment/Services")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const CustomSoftwareHeroSection = dynamic(
  () => import("@/PagesComponent/CoustomSoftwareDevelopment/HeroSection")
);
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const CoustomSoftwareServices = () => {
  return (
    <Fragment>
      <Head>
        <title>Custom Software Development Company | KOLI Infotech</title>
        <meta
          name="description"
          content="Build scalable, secure custom software — ERP, CRM, and business automation tailored to your goals. From idea to launch."
        />
      </Head>
      <CustomSoftwareHeroSection />
      <ClientWeServe />
      <CoustomSoftwareDServices />
      <ServicePageExtras serviceKey="custom-software-development" />
    </Fragment>
  );
};

export default CoustomSoftwareServices;
