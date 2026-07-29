import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const CloudServiceHeroSection = dynamic(
  () => import("@/PagesComponent/CloudServices/HeroSection")
);
const Cloudservices = dynamic(
  () => import("@/PagesComponent/CloudServices/Services")
);
const ServicePageExtras = dynamic(() => import("@/commonComponent/ServicePageExtras"));
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));

const CloudServices = () => {
  return (
    <Fragment>
      <Head>
        <title>Cloud & DevOps Services – AWS Experts | KOLI Infotech</title>
        <meta
          name="description"
          content="End-to-end cloud development & DevOps: AWS, Docker, Kubernetes, CI/CD — secure, scalable, compliant solutions."
        />
      </Head>
      <CloudServiceHeroSection />
      <ClientWeServe />
      <Cloudservices />
      <ServicePageExtras serviceKey="cloud-services" />
    </Fragment>
  );
};

export default CloudServices;
