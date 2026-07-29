import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/PagesComponent/HomePage/HeroSection";
import ViewportDefer from "@/commonComponent/ViewportDefer";

/** Reserve space while below-fold chunks load — prevents CLS. */
const sectionLoading = (minHeight = "24rem") => (
  <div aria-hidden="true" style={{ minHeight, width: "100%" }} />
);

const ClientLogoStrip = dynamic(
  () => import("@/PagesComponent/HomePage/ClientLogoStrip"),
  { ssr: false, loading: () => sectionLoading("8rem") }
);

const OurServices = dynamic(
  () => import("@/PagesComponent/HomePage/OurServices"),
  { ssr: false, loading: () => sectionLoading("28rem") }
);

const IndustriesSection = dynamic(
  () => import("@/PagesComponent/HomePage/IndustriesSection"),
  { ssr: false, loading: () => sectionLoading("24rem") }
);

const WhyChooseKOLIinfotech = dynamic(
  () => import("@/PagesComponent/HomePage/WhyChooseKOLIinfotech"),
  { ssr: false, loading: () => sectionLoading("32rem") }
);

const Accomplishments = dynamic(
  () => import("@/PagesComponent/Accomplishment/Accomplishments"),
  { ssr: false, loading: () => sectionLoading("20rem") }
);

const Technologywework = dynamic(
  () => import("@/commonComponent/Technologywework"),
  { ssr: false, loading: () => sectionLoading("24rem") }
);

const OurProcessSection = dynamic(
  () => import("@/PagesComponent/HomePage/OurProcessSection"),
  { ssr: false, loading: () => sectionLoading("40rem") }
);

const OurPortfolio = dynamic(
  () => import("@/PagesComponent/HomePage/OurPortfolio"),
  { ssr: false, loading: () => sectionLoading("28rem") }
);

const OurValuableClients = dynamic(
  () => import("@/PagesComponent/HomePage/OurValuableClients"),
  { ssr: false, loading: () => sectionLoading("24rem") }
);

const HomeFAQ = dynamic(
  () => import("@/PagesComponent/HomePage/HomeFAQ"),
  { ssr: false, loading: () => sectionLoading("24rem") }
);

const ConsultationCTA = dynamic(
  () => import("@/commonComponent/ConsultationCTA"),
  { ssr: false, loading: () => sectionLoading("16rem") }
);

const OurTopBlogs = dynamic(() => import("@/commonComponent/OurTopBlogs"), {
  ssr: false,
  loading: () => sectionLoading("28rem"),
});

const FinalCTA = dynamic(
  () => import("@/commonComponent/FinalCTA"),
  { ssr: false, loading: () => sectionLoading("12rem") }
);

const HomePage = () => {
  return (
    <Fragment>
      <div style={{ width: "100%" }}>
        <HeroSection />
        <ViewportDefer minHeight="8rem">
          <ClientLogoStrip />
        </ViewportDefer>
        <ViewportDefer minHeight="28rem">
          <OurServices />
        </ViewportDefer>
        <ViewportDefer minHeight="24rem">
          <IndustriesSection />
        </ViewportDefer>
        <ViewportDefer minHeight="32rem">
          <WhyChooseKOLIinfotech />
        </ViewportDefer>
        <ViewportDefer minHeight="20rem">
          <Accomplishments />
        </ViewportDefer>
        <ViewportDefer minHeight="24rem">
          <Technologywework />
        </ViewportDefer>
        <ViewportDefer minHeight="40rem">
          <OurProcessSection />
        </ViewportDefer>
        <ViewportDefer minHeight="28rem">
          <OurPortfolio />
        </ViewportDefer>
        <ViewportDefer minHeight="24rem">
          <OurValuableClients />
        </ViewportDefer>
        <ViewportDefer minHeight="24rem">
          <HomeFAQ />
        </ViewportDefer>
        <ViewportDefer minHeight="16rem">
          <ConsultationCTA />
        </ViewportDefer>
        <ViewportDefer minHeight="28rem">
          <OurTopBlogs isGrid={false} limit={3} showMoreButton={true} />
        </ViewportDefer>
        <ViewportDefer minHeight="12rem">
          <FinalCTA />
        </ViewportDefer>
      </div>
    </Fragment>
  );
};
export default HomePage;
