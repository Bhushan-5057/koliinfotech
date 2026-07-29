import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const JobDescriptionHeroSection = dynamic(
  () => import("@/PagesComponent/JobDescriptionPage/JobDescriptionHeroSection")
);
const FormSection = dynamic(
  () => import("@/PagesComponent/ApplyJobPage/FormSection")
);

const ApplyJob = () => {
  return (
    <Fragment>
      <Head>
        <title>Apply Job | KOLI Infotech Pvt. Ltd.</title>
        <meta
          name="description"
          content="Apply for open roles at KOLI Infotech. Submit your application and join our engineering and design teams in Surat and beyond."
        />
      </Head>
      <JobDescriptionHeroSection />
      <FormSection />
    </Fragment>
  );
};

export default ApplyJob;
