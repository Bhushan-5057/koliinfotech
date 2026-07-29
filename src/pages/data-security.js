import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const DataSecureScreen = dynamic(
  () => import("@/PagesComponent/DataSecurity/DataSecureScreen")
);
const DataSecureHeroSection = dynamic(
  () => import("@/PagesComponent/DataSecurity/HeroSection")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));

const DataSecurity = () => {
  return (
    <Fragment>
      <Head>
        <title>Data Security & Privacy Services | KOLI Infotech</title>
        <meta
          name="description"
          content="Robust data security — privacy, encryption, compliance, and penetration testing to protect your web and mobile solutions."
        />
      </Head>
      <DataSecureHeroSection />
      <ClientWeServe />
      <DataSecureScreen />
      <ServicePageExtras serviceKey="data-security" />
    </Fragment>
  );
};

export default DataSecurity;
