import React, { Fragment } from 'react'
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactUsHeroSection = dynamic(
  () => import('@/PagesComponent/ContactUs/HeroSection')
);
const ContactIntroSection = dynamic(
  () => import('@/PagesComponent/ContactUs/ContactIntroSection')
);
const ContactUsScreen = dynamic(
  () => import('@/PagesComponent/ContactUs/ContactUsScreen')
);
const FinalCTA = dynamic(() => import('@/commonComponent/FinalCTA'));

const ContactUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us – KOLI Infotech | Get a Free Consultation</title>
        <meta
          name="description"
          content="Contact KOLI Infotech for custom software, web & mobile app development. Free consultation, response within 24 hours. Offices in Surat, Gujarat."
        />
      </Head>
      <ContactUsHeroSection />
      <ContactIntroSection />
      <ContactUsScreen />
      <FinalCTA />
    </Fragment>
  )
}

export default ContactUs
