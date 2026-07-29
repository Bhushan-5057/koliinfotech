import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const TestiHeroSection = dynamic(
  () => import("@/PagesComponent/Testimonial/TestiHeroSection")
);
const TestimonialOfOurClient = dynamic(
  () => import("@/PagesComponent/Testimonial/TestimonialOfOurClient")
);
const ClientWeServe = dynamic(() => import("@/commonComponent/ClientWeServe"));
const ConsultationCTA = dynamic(() => import("@/commonComponent/ConsultationCTA"));
const FinalCTA = dynamic(() => import("@/commonComponent/FinalCTA"));

const TestimonialPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Client Testimonials | KOLI Infotech</title>
        <meta
          name="description"
          content="See why 150+ clients trust KOLI Infotech. Read testimonials and success stories showcasing our expertise and reliable IT solutions."
        />
      </Head>
      <TestiHeroSection />
      <ClientWeServe />
      <TestimonialOfOurClient />
      <ConsultationCTA />
      <FinalCTA />
    </Fragment>
  );
};
export default TestimonialPage;
